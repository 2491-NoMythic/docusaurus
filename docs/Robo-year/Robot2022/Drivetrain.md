# Drivetrain

The drivetrain consists of 4 motors in a tank drive. We have LeftLead, LeftFollow, RightLead, and RightFollow and they all work in tandem. The idea of choosing a tank drive this year was to be a more physically defensive robot in order to play defense well as well as bring able to zoom and push cargo and robots around the field. Also in this subsystem is the Gyro affectionatly named "GyroBirb"

## How does this Drivetrain work?

If it wasn't clear from the names, there are only 2 motors that we actually supply instructions to throughout the match, LeftLead and RightLead. LeftFollow and RightFollow are programmed to do whatever we tell their lead motors do which saves roboRio processing power which is really nice. (This only works on tank drivetrains becuse we really only need 2 inputs, a left side and a right side.)

```java
        leftFollowMotor.follow(leftLeadMotor);
        rightFollowMotor.follow(rightLeadMotor);
```
Within the constuctor also exists the setup for PID Tuning but this PID tuning system is a little different from normal. Both of the PID values being tuned are being stored on the name motor because we have a distance number and a turn number, so the PID tuning is pointed at the numbers only on one motor.

Another tidbit is that our TeleOp drive is different from our AutoDrive, AutoDrive is the only one with PID tuning, TeleOp does not.