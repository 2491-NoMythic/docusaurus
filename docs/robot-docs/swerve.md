# Swerve

## What is Swerve?

Swerve drive, or swerve, is a type of drivetrain. It has one wheel in each corner of the robot. Each wheel is controlled by two motors, one for driving and one for steering. This allows the robot to turn in place and drive while facing in any direction. Unlike most hyper-mobile drivetrains, it can and should use high-traction wheels, giving it phenomenal pushing power. It has the pushing power of tank drive combined with the mobility of mecanum drive. However, it does have significant downsides, mostly in power issues, cost (both in time and money), and programming issues.

## Prerequisites

Swerve is annoying to make. It requires a gyroscope, as without it the robot cannot tell which way it is facing. It needs eight motors all synchronized to each other, PID loops to keep the drive motors moving at about the same speed, and more code to make sure everything is pointing the right direction if the robot wants to turn. Here is how to make some of that.

## Components

### The Import List

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

### The Swerve Module

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
### Drivetrain

### Required Constants
[Here](SwerveConstants) is the list of the constants required to get this working. It is in a seperate page because the list is very very long.
## Problems

### Problem: My wheels are spinning randomly!
This issue shows up a lot whenever new swerve modules show up. One possible cause has to do with inversions - done improperly, inverting the modules will also invert the PID loop, causing it to make the modules as unsynched as possible. 