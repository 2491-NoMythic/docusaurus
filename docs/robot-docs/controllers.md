# Controllers

The controllers that we mainly use are PS4 controllers and Thrustmasters.


## Modifying input values
When making your driving commands extra fancy, you might want something other than the -1 to 1 value from your joysticks. 

## Direction/Angle
You can combine the two axis' of a thrustmaster or thumbstick to find what angle the stick is pointing in!
```java
/** Returns a value of -180 to 180 degrees, forward is zero, left is positive, right is negative, >>not touching the joystick is also measured as zero<<*/
private double getJoystickDegrees(int horizontalAxis, int verticalAxis) {
    double xAxis = -controller.getRawAxis(horizontalAxis);
    double yAxis = -controller.getRawAxis(verticalAxis);
    return Math.toDegrees(Math.atan2(xAxis, yAxis));
}
```

## Magnitude
The magnitude is the distance a joystick is from the center.
```java
private double getJoystickMagnitude(int horizontalAxis, int verticalAxis) {
    double xAxis = -controller.getRawAxis(horizontalAxis);
    double yAxis = -controller.getRawAxis(verticalAxis);
    double value = Math.sqrt(Math.pow(xAxis, 2) + Math.pow(yAxis, 2));

    double value = Math.min(1.0, Math.max(0.0, value);//clamp the value between 0 and 1
    return value;
}
```
