---
sidebar_position: 5
---

# Integrating Inputs Class into Subsystem


## Create the Instance of the Inputs class in the subsytem


There should be one instance of the inputs class for every physical instance of that subsystem that exist. For example, each limelight gets its own instance of a LimelightInputs class, and there should be 1 instance of the MotorLoggerInputs in the subsystemInputs class for each motor in the subsystem.


Define the inputs class in the constructor for the subsystem, but create the instance of it outside of the constructor. For example:
```java
DrivetrainInputsAutoLogged inputs;


public DrivetrainSubystem() {
    inputs = new DrivetrainInputsAutoLogged();
    //define other Objects for the 
}
```




## Updating the Inputs


Make sure that all inputs that need to be constantly updated in order to be used (such as motor position, or sensor state) are updated during periodic() of that subsystem. This is done by referencing the variables through the instance of the Inputs class. For example, in the drivetrain subsystem: (note that this is not the exact code we have in OUR drivetrain subsystem, just an example for what it might look like)
```java
public void periodic() {
    inputs.gyroscopeRotation = this.getGyroscopeRotation();
    inputs.SwerveModuleStates = this.getSwerveModuleStates();
    //other periodic code
}
```
Once these values are set, you then have to tell the code to update these values on the log. This is done by the adding the following code to periodic of the subystem, BELOW where the input values are set:
```java
public void periodic() {
    Logger.ProcessInputs("SubsystemName", inputsClassInstance);
}
```
## Using the inputs class to access values instead of the sensors


Now that we have created an inputs class that tracks the values of our inputs periodically, we need to use the inputs class to access those values, instead of the sensors. For example, on the drivetrain, instead of getting the robot orientation through the getGyrosocopeRotation() method, access it using inputs.gyroscopeRotation. This ensures that all ouputs created using the inputs (via logic, math, or just raw values) will be dependent on the inputs in the inputs class. This makes the testing of new code while doing replay simulation possible.




