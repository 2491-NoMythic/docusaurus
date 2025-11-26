# Programming Subteam Error Log

Welcome to the NoMythic Programming Error Log. This is a document created by Rowan Flood on Dec 5, 2024.  the purpose of this document is to keep track of the tricky errors our subteam comes across. Every time we encounter an error message that takes a significant amount of finagling to get rid of, or that didn’t have in intuitive solution, write about it here! Copy the error message after you realise it’s gonna be a tough problem, and write the solution once you find it!

## TEMPLATE (copy then use):
#### Date, Year. Name:
Problem: make sure to include the exact error message copied from terminal or RioLog
Solution: specifically what you changed in order to solve the problem
Method (Optional): How you found the solution (for example: searching “this” on ChieffDelphi, asking ChatGPT, guessing)
2024/2025 season

#### December, 2024. Rowan Flood: 
Problem: I am using the WpiLib 2024.1.1-beta-1 version of wpilibsuite, and when I built the code, I got this error code from AdvantageKit:
“The version of AdvantageKit installed in this project requires WPILib 2025.1.1-beta-1, but WPILib 2025.1.1-beta-2 is currently installed. Please update AdvantageKit and/or WPILib to compatible versions (the supported version of WPILib is listed in the release notes for each AdvantageKit version). DO NOT override this check; running with invalid versions will result in a broken project with issues that are difficult to diagnose.”
Solution: changing the 3rd line of build.gradle to say “2025.1.1-beta-1” instead of “2025.1.1-beta-2” as the version number for wpi.first.GradleRIO
Method (optional): I explained the situation to chatGPT, and fixed the error with one of the solutions suggested.

#### December, 2024. Rowan Flood, Xiaohan Liu:
Problem: when we built the code, we got this error from our launch.json file:
Unable to format JSON
Java.Lang.AssertionError: Unable to format JSON
Followed by a looong stack trace of could we didn’t make. 
Solution: deleted commas after “true” and “false” in our launch.json file
Method (Optional): looked at template code that built just fine, and tried to find differences between the launch.JSON files. The only difference we found was two commas that weren’t in the template code

#### December, 2024. Rowan Flood:
Problem: code would crash immediately after starting if a USB drive was not plugged in for recording logs to. After plugging in a drive, we had to power cycle the robot before code would work. Here is the error message:

Solution: added code in Robot.java that checks if a USB drive is visible by the RIO, and - if not - prints an error message and saves logs to an internal file instead of attempting to save to the drive. Here is the code: 
Method (Optional): pasted a picture of the error code into ChatGPT, than asked how to carry out the solution

#### 2025 February, Evan and Griffin
Problem: Deploy fails with the following error:
Execution failed for task ':deployfrcStaticFileDeployroborio'.
> A failure occurred while executing edu.wpi.first.deployutils.deploy.artifact.ArtifactDeployWorker
   > SFTP error (SSH_FX_FAILURE): Failure
Cause: RoboRio internal storage was filled with log files, and there was no space to upload new pathplanner paths
Solution: Use filezilla or ssh to log into the roborio and delete log files
> ssh lvuser@10.24.91.2 # Log into the roborio
> du -sh logs # Should print a fairly large size, indicating a large number of logs on the roborio
> rm -r logs # Delete all logs from the roborio
