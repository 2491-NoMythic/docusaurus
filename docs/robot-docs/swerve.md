# Swerve

## What is Swerve?

Swerve drive, or swerve, is a type of drivetrain. It has one wheel in each corner of the robot. Each wheel is controlled by two motors, one for driving and one for steering. This allows the robot to turn in place and drive while facing in any direction. Unlike most hyper-mobile drivetrains, it can and should use high-traction wheels, giving it phenomenal pushing power. It has the pushing power of tank drive combined with the mobility of mecanum drive. However, it does have significant downsides, mostly in power issues, cost (both in time and money), and programming issues.

## Prerequisites

Swerve is annoying to make. It requires a gyroscope, as without it the robot cannot tell which way it is facing. It needs eight motors all synchronized to each other, PID loops to keep the drive motors moving at about the same speed, and more code to make sure everything is pointing the right direction if the robot wants to turn. Here is how to make some of that.

## Components

### Swerve Module - Imports

This assumes you are using Phoenixes, we will eventually update with Kraken code.
```java
import com.ctre.phoenix6.configs.CANcoderConfiguration;
import com.ctre.phoenix6.configs.TalonFXConfiguration;
import com.ctre.phoenix6.controls.CoastOut;
import com.ctre.phoenix6.controls.NeutralOut;
import com.ctre.phoenix6.controls.PositionDutyCycle;
import com.ctre.phoenix6.controls.StaticBrake;
import com.ctre.phoenix6.controls.VelocityDutyCycle;
import com.ctre.phoenix6.hardware.CANcoder;
import com.ctre.phoenix6.hardware.TalonFX;

import edu.wpi.first.math.MathUtil;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.SwerveModulePosition;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import edu.wpi.first.wpilibj.DriverStation;
import edu.wpi.first.wpilibj.shuffleboard.ShuffleboardTab;
import frc.robot.settings.Constants.DriveConstants;
```

### Swerve Module

A swerve drive is made up of four modules. Each module has a wheel, two motors, and an encoder. In the code, you need the motors, an encoder, and a Rotation2d. You also need a bunch of variables, like the steering angle and driving speed. These specific varaibles are used in the controlling bit specifically.
```java
  private final TalonFX m_driveMotor;
  private final TalonFX m_steerMotor;
  private final CANcoder m_steerEncoder;
  private final Rotation2d m_steerEncoderOffset;

  private double m_desiredSteerAngle;

  private double m_desiredDriveSpeed;

  private VelocityDutyCycle m_driveControl = new VelocityDutyCycle(0);
  private PositionDutyCycle m_steerControl = new PositionDutyCycle(0);
  private CoastOut m_coastControl = new CoastOut();
  private StaticBrake m_brakeControl = new StaticBrake();
  private NeutralOut m_neutralControl = new NeutralOut();
```
The next bit demonstrates how to get the speed, position, and rotation of the module: 
```java
  public SwerveModuleState getState() {
    return new SwerveModuleState(
        getSpeedMetersPerSecond(), getRotation());
  }
  public SwerveModulePosition getPosition() {
    return new SwerveModulePosition(
        getDriveDistanceMeters(), getRotation());
  }
```
As well as the angles of the steering motor. Angles because it needs to have where it is and where it wants to be. This is when one of the variables above shows up.
```java
  public Rotation2d getRotation() {
    return Rotation2d.fromRotations(MathUtil.inputModulus(m_steerMotor.getPosition().getValue(), -0.5, 0.5));
  }

  public double getTargetAngle() {
    return m_desiredSteerAngle;
  }
```
This section of code shows how to get the actual speed and velocity. As usual, this is divided between the current state and the target state. It also has the distance of the drive motor, which is very helpful for autonomous. 
```java
  public double getTargetSpeedMetersPerSecond() {
    return m_desiredDriveSpeed;
  }

  public double getSpeedMetersPerSecond() {
    return (m_driveMotor.getVelocity().getValue() * DriveConstants.DRIVETRAIN_ROTATIONS_TO_METERS);
  }

  public double getDriveDistanceMeters() {
    return (m_driveMotor.getPosition().getValue() * DriveConstants.DRIVETRAIN_ROTATIONS_TO_METERS);
  }
```
The last part is the code that actually gives all of the targets. It also optimizes the reference state to avoid spinning further than 90 degrees.
```java
  public void setDesiredState(SwerveModuleState desiredState) {

    if (desiredState.angle == null) {
      DriverStation.reportWarning("Cannot set module angle to null.", true);
    }
    SwerveModuleState state =
    SwerveModuleState.optimize(desiredState, getRotation());

    m_desiredSteerAngle = MathUtil.inputModulus(state.angle.getRotations(), -0.5, 0.5);
    m_desiredDriveSpeed = state.speedMetersPerSecond / DriveConstants.DRIVETRAIN_ROTATIONS_TO_METERS;

    if (Math.abs(m_desiredDriveSpeed) <= 0.001) {
      m_driveMotor.setControl(m_neutralControl);
      m_steerMotor.setControl(m_steerControl.withPosition(m_desiredSteerAngle));
    } else {
      m_driveMotor.setControl(m_driveControl.withVelocity(m_desiredDriveSpeed).withFeedForward(m_desiredDriveSpeed/DriveConstants.MAX_VELOCITY_RPS_EMPIRICAL));
      m_steerMotor.setControl(m_steerControl.withPosition(m_desiredSteerAngle));
    }
  }
```
One important thing to know is that for this part specifically, the rule about not copy-pasting anything you don't know the function of doesn't quite apply.
### Drivetrain - Imports

Please do not just copy-paste, your code might have something else. 
``` java 
import static frc.robot.settings.Constants.DriveConstants.BL_DRIVE_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.BL_STEER_ENCODER_ID;
import static frc.robot.settings.Constants.DriveConstants.BL_STEER_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.BR_DRIVE_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.BR_STEER_ENCODER_ID;
import static frc.robot.settings.Constants.DriveConstants.BR_STEER_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.CANIVORE_DRIVETRAIN;
import static frc.robot.settings.Constants.DriveConstants.DRIVETRAIN_PIGEON_ID;
import static frc.robot.settings.Constants.DriveConstants.DRIVE_ODOMETRY_ORIGIN;
import static frc.robot.settings.Constants.DriveConstants.FL_DRIVE_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.FL_STEER_ENCODER_ID;
import static frc.robot.settings.Constants.DriveConstants.FL_STEER_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.FR_DRIVE_MOTOR_ID;
import static frc.robot.settings.Constants.DriveConstants.FR_STEER_ENCODER_ID;
import static frc.robot.settings.Constants.DriveConstants.FR_STEER_MOTOR_ID;
import static frc.robot.settings.Constants.ShooterConstants.OFFSET_MULTIPLIER;

import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

import javax.swing.text.html.Option;

import com.ctre.phoenix6.hardware.Pigeon2;
import com.pathplanner.lib.commands.PathPlannerAuto;
import com.pathplanner.lib.util.PathPlannerLogging;

import edu.wpi.first.math.estimator.SwerveDrivePoseEstimator;
import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.geometry.Translation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.SwerveDriveKinematics;
import edu.wpi.first.math.kinematics.SwerveModulePosition;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import edu.wpi.first.wpilibj.DriverStation;
import edu.wpi.first.wpilibj.DriverStation.Alliance;
import edu.wpi.first.wpilibj.Preferences;
import edu.wpi.first.wpilibj.Timer;
import edu.wpi.first.wpilibj.smartdashboard.Field2d;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;
import edu.wpi.first.wpilibj2.command.InstantCommand;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.LimelightHelpers;
import frc.robot.settings.Constants;
import frc.robot.settings.LimelightValues;
import frc.robot.settings.Constants.CTREConfigs;
import frc.robot.settings.Constants.Vision;
import frc.robot.settings.Constants.DriveConstants.Offsets;
import frc.robot.settings.Constants.DriveConstants.Positions;
```
### Drivetrain

The first step is to create a set of CTRE Configs and Kinematics, arrays for the
### CTRE Configs

The Company CTRE has a large amount of things one can do with the Talon's integrated motor controllers and other things the company makes. All of these are extremely important for swerve. These should probably go in Constants. The first chunk makes configurations that can be implemented. (The brackets have matches at the bottom.)
```java
public static final class CTREConfigs {
  public TalonFXConfiguration driveMotorConfig;
  public TalonFXConfiguration steerMotorConfig;
  public CANcoderConfiguration steerEncoderConfig;
  public Pigeon2Configuration pigeon2Config;

  public CTREConfigs() {
      driveMotorConfig = new TalonFXConfiguration();
      steerMotorConfig = new TalonFXConfiguration();
      steerEncoderConfig = new CANcoderConfiguration();
      pigeon2Config = new Pigeon2Configuration();
```
Each of the following sections is a specific configuration. This one is the steering motor:
```java
      steerMotorConfig.Feedback.RotorToSensorRatio = 1/DriveConstants.DRIVETRAIN_STEER_REDUCTION;
      steerMotorConfig.MotorOutput.Inverted = DriveConstants.DRIVETRAIN_STEER_INVERTED;
      steerMotorConfig.Slot0.kP = DriveConstants.k_STEER_P;
      steerMotorConfig.Slot0.kI = DriveConstants.k_STEER_I;
      steerMotorConfig.Slot0.kD = DriveConstants.k_STEER_D;
      steerMotorConfig.Slot0.kS = DriveConstants.k_STEER_FF_S;
      steerMotorConfig.Slot0.kV = DriveConstants.k_STEER_FF_V;
      steerMotorConfig.Voltage.PeakForwardVoltage = 12;
      steerMotorConfig.Voltage.PeakReverseVoltage = -12;
      steerMotorConfig.Feedback.FeedbackSensorSource = FeedbackSensorSourceValue.RemoteCANcoder;
      steerMotorConfig.ClosedLoopGeneral.ContinuousWrap = true;
```
This the drive motor:
```java
      driveMotorConfig.Feedback.SensorToMechanismRatio = 1/DriveConstants.DRIVETRAIN_DRIVE_REDUCTION;
      driveMotorConfig.MotorOutput.Inverted = DriveConstants.DRIVETRAIN_DRIVE_INVERTED;
      driveMotorConfig.MotorOutput.DutyCycleNeutralDeadband = 0.0;
      driveMotorConfig.ClosedLoopRamps.DutyCycleClosedLoopRampPeriod = DriveConstants.DRIVE_MOTOR_RAMP;
      driveMotorConfig.Slot0.kP = DriveConstants.k_DRIVE_P;
      driveMotorConfig.Slot0.kI = DriveConstants.k_DRIVE_I;
      driveMotorConfig.Slot0.kD = DriveConstants.k_DRIVE_D;
      driveMotorConfig.Slot0.kS = DriveConstants.k_DRIVE_FF_S;
      driveMotorConfig.Slot0.kV = DriveConstants.k_DRIVE_FF_V;
      driveMotorConfig.Voltage.PeakForwardVoltage = 12;
      driveMotorConfig.Voltage.PeakReverseVoltage = -12;
      driveMotorConfig.MotorOutput.NeutralMode = NeutralModeValue.Brake;
```
### Required Constants
[Here](SwerveConstants) is the list of the constants required to get this working. It is in a seperate page because the list is very very long.
## Problems

### Problem: My wheels are spinning randomly!
This issue shows up a lot whenever new swerve modules show up. One possible cause has to do with inversions - done improperly, inverting the modules will also invert the PID loop, causing it to make the modules as unsynched as possible. 