# Gradle Changes

## Overview
In order to implement simulation, changes to the build.gradle file are required. The build.gradle file is found near the bottom of the explorer, and is used to manage external libraries/vendor dependencies and configure how code is deployed to the RoboRIO. 

## Code 
This code must be put in dependencies(colors of text may not look the same): 
dependencies {
```java
    genericGradleThing wpi.java.deps.genericThing()
    genericGradleThing2 wpi.java.deps.genericThing2(wpi.platforms.genericTech)  
    
    thisRepeats on.for.someTime(acrossMultiple.Sections)

    //CODE START
    def akitJson = new groovy.json.JsonSlurper().parseText(
        new File(projectDir.getAbsolutePath() + "/vendordeps/AdvantageKit.json").text
    )
    annotationProcessor "org.littletonrobotics.akit:akit-autolog:$akitJson.version"
    //CODE END
```
}

And this code can be put directly after the ending bracket of dependencies(or other places): 
```java
task(replayWatch, type: JavaExec) { 
    mainClass = "org.littletonrobotics.junction.ReplayWatch"
    classpath = sourceSets.main.runtimeClasspath
}
```
## Sources
[AdvantageKit>Existing_Projects](https://docs.advantagekit.org/getting-started/installation/existing-projects)

