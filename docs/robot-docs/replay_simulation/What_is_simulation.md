# What is Replay Simulation?

## Using Replay Simulation

The process of replay simulation has these steps:

1. Recording the inputs & outputs: 

during the match, sensor inputs are recorded and saved to a log file. This is done through our kid, using the AdvantageKit software to help us. Examples of sensor inputs would be: drivetrain wheel encoders, distance sensor values on the robot, Estimated robot position from limelights. Basically, any data we gather from parts of the robot that we then use - via logic, math, or raw values - to produce outputs. Outputs - such as the robot position we calculate using multiple limelights, or the speed we decide to run the end effector at - that are determined by the inputs in our code can also be recorded using AdvantageKit.

2. Replaying the inputs and outputs: 

using AdvantageScope, we can replay the inputs recorded in the log file to see what was happening on our robot during a match. We can view recorded inputs and outputs via AdvantageScope, allowing us to determine exactly what happened on our robot at any given point in a match

3. Simulating new code using the inputs: 

Using the wpilib "simulate code" command (found in the same place as "deploy" and "build"), we can replay the inputs from any match (or any time the robot was on) and create a new log file that contains the outputs that would have been created during that match if the new code had been running. 

another nifty part about simulating the code is that if the inputs recieved would have caused your new code to crash, the simulation will catch that, and report an error just like the RioLog does, helping you catch more than just compilation errors without a robot.

## Coding Replay Simulation

There are 4 steps to incorporating replay simulation into your codebase. They are as follows:

1. Update the build.gradle class

2. Create inputs class(es), one for each subsystem that you want to record inputs for

3. Incorporating the inputs class into the actual subsystem class

4. recording outputs