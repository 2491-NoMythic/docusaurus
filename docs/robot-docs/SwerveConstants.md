Hello! Here is the list of constants to use with swerve. If you have no idea what this is, go back and read the Swerve page. Make sure to measure things and put in your own numbers after all of these. It is why there are no = signs.
```java
 public static final Pose2d DRIVE_ODOMETRY_ORIGIN = new Pose2d(Stuff);
    /**
     * The bumper-to-bumper width of the robot.
     */
    public static final double DRIVETRAIN_ROBOT_WIDTH_METERS;
    /**
     * The left-to-right distance between the drivetrain wheels
     * Should be measured from center to center.
     */
    public static final double DRIVETRAIN_TRACKWIDTH_METERS;
    /**
     * The front-to-back distance between the drivetrain wheels.
     * Should be measured from center to center.
     */
    public static final double DRIVETRAIN_WHEELBASE_METERS;

    /**
     * The diameter of the module's wheel in meters.
     */
    public static final double DRIVETRAIN_WHEEL_DIAMETER;

    /**
     * The overall drive reduction of the module. Multiplying motor rotations by
     * this value should result in wheel rotations.
     * these numbers are just gear ratios that are used. Ask build team about these.
     */
    public static final double DRIVETRAIN_DRIVE_REDUCTION;

    /**
     * Whether the drive motor should be counterclockwise or clockwise positive. 
     * If there is an odd number of gear reductions this is typically clockwise-positive.
     */
    public static final InvertedValue DRIVETRAIN_DRIVE_INVERTED;

    /**
     * The overall steer reduction of the module. Multiplying motor rotations by
     * this value should result in wheel rotations.
     */
    public static final double DRIVETRAIN_STEER_REDUCTION;

    /**
     * Whether the steer motor should be counterclockwise or clockwise positive. 
     * If there is an odd number of gear reductions this is typically clockwise-positive.
     */
    public static final InvertedValue DRIVETRAIN_STEER_INVERTED;

    /**
     * How many meters the wheels travel per rotation. <p>
     * Multiply rotations by this to get meters.<p>
     * Divide meters by this to get rotations.
     */
    public static final double DRIVETRAIN_ROTATIONS_TO_METERS = (DRIVETRAIN_WHEEL_DIAMETER * Math.PI);

    /**
     * The maximum velocity of the robot in meters per second.
     * <p>
     * This is a measure of how fast the robot should be able to drive in a straight line.
     */
    /*
     * FIXME Measure the drivetrain's maximum velocity or calculate the theoretical.
     * The formula for calculating the theoretical maximum velocity is:
     * <Motor free speed RPM> / 60 * <Drive reduction> * <Wheel diameter meters> * pi
     */
    public static final double MAX_VELOCITY_METERS_PER_SECOND = / 60.0 * DRIVETRAIN_DRIVE_REDUCTION * DRIVETRAIN_WHEEL_DIAMETER * Math.PI;
    /**
     * The drive motor sensor value at a 100% duty cycle output in a straight line.
     */
    public static final double MAX_VELOCITY_RPS_EMPIRICAL;
    /**
     * The maximum angular velocity of the robot in radians per second.
     * <p>
     * This is a measure of how fast the robot can rotate in place.
     */
    // Here we calculate the theoretical maximum angular velocity. You can also replace this with a measured amount.
    public static final double MAX_ANGULAR_VELOCITY_RADIANS_PER_SECOND = MAX_VELOCITY_METERS_PER_SECOND /
        Math.hypot(DRIVETRAIN_TRACKWIDTH_METERS / 2.0, DRIVETRAIN_WHEELBASE_METERS / 2.0);

    public static final SwerveDriveKinematics kinematics = new SwerveDriveKinematics(
        // Front left
        new Translation2d(DRIVETRAIN_TRACKWIDTH_METERS / 2.0, DRIVETRAIN_WHEELBASE_METERS / 2.0),
        // Front right
        new Translation2d(DRIVETRAIN_TRACKWIDTH_METERS / 2.0, -DRIVETRAIN_WHEELBASE_METERS / 2.0),
        // Back left
        new Translation2d(-DRIVETRAIN_TRACKWIDTH_METERS / 2.0, DRIVETRAIN_WHEELBASE_METERS / 2.0),
        // Back right
        new Translation2d(-DRIVETRAIN_TRACKWIDTH_METERS / 2.0, -DRIVETRAIN_WHEELBASE_METERS / 2.0));

    public static final String DRIVETRAIN_SMARTDASHBOARD_TAB = "Drivetrain";
    public static final String CANIVORE_DRIVETRAIN = "Swerve";
    public static final int DRIVETRAIN_PIGEON_ID = 0;
// Fill in the fromRotations
    public static final int FL_DRIVE_MOTOR_ID;
    public static final int FL_STEER_MOTOR_ID;
    public static final int FL_STEER_ENCODER_ID;
    public static final Rotation2d FL_STEER_OFFSET = Rotation2d.fromRotations();

    public static final int FR_DRIVE_MOTOR_ID;
    public static final int FR_STEER_MOTOR_ID;
    public static final int FR_STEER_ENCODER_ID;
    public static final Rotation2d FR_STEER_OFFSET = Rotation2d.fromRotations();

    public static final int BL_DRIVE_MOTOR_ID;
    public static final int BL_STEER_MOTOR_ID;
    public static final int BL_STEER_ENCODER_ID;
    public static final Rotation2d BL_STEER_OFFSET = Rotation2d.fromRotations();

    public static final int BR_DRIVE_MOTOR_ID;
    public static final int BR_STEER_MOTOR_ID;
    public static final int BR_STEER_ENCODER_ID ;
    public static final Rotation2d BR_STEER_OFFSET = Rotation2d.fromRotations(0.40309);

    // Drive Motor
    public static final double k_DRIVE_P;
    public static final double k_DRIVE_I;
    public static final double k_DRIVE_D;
    public static final double k_DRIVE_FF_S;
    public static final double k_DRIVE_FF_V;
    public static final double DRIVE_DEADBAND_MPS;
    public static final double DRIVE_MOTOR_RAMP;
    // Steer Motor
    /**
     * The maximum velocity of the steer motor. <p> 
     * This is the limit of how fast the wheels can rotate in place.
     */
    public static final double MAX_STEER_VELOCITY_RADIANS_PER_SECOND = Math.PI; // 1/2 rotation per second.
    /**
     * The maximum acceleration of the steer motor. <p>
     * This is the limit of how fast the wheels can change rotation speed.
     */
    public static final double MAX_STEER_ACCELERATION_RADIANS_PER_SECOND_SQUARED = 2 * Math.PI; 
    public static final double k_STEER_P;
    public static final double k_STEER_I;
    public static final double k_STEER_D; 
    public static final double k_STEER_FF_S;
    public static final double k_STEER_FF_V;

    // Auto PID loops
    // twin pid controllers that control the x and y robot movements.
    public static final double k_XY_P;//*2.5;
    public static final double k_XY_I;
    public static final double k_XY_D;

    public static final double k_THETA_P;
    public static final double k_THETA_I;
    public static final double k_THETA_D;
    public static final double k_THETA_TOLORANCE_DEGREES;
    public static final double k_THETA_TOLORANCE_DEG_PER_SEC;

    public static final double k_BALANCE_P;
    public static final double k_BALANCE_I;
    public static final double k_BALANCE_D;
    public static final double k_BALANCE_TOLORANCE_DEGREES;
    public static final double k_BALANCE_TOLORANCE_DEG_PER_SEC;

```