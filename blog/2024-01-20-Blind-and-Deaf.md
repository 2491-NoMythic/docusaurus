---
slug: 24BW2S
title: Blind and Deaf
authors:
  - name: Augie
    title: "[REDACTED]"
tags: [build season, limelight hell]
---
Today was a day of sensors, limelights, and pain. Especially the latter, because I have a headache. 
* Indexer Work (Me, Xiaohan):Tthe indexer is the part of the robot responsible for transfering the notes from the intake to the shooter. It now has a subsystem and a mostly functional command.
* Sensor Conversation (Xiaohan, Rowan): We have determined what sensors we would like on the robot. We want a distance sensor, a Hall Effects sensor, and three limelights.
* Path Automation (Griffin): The robot now has a variety of paths it can use for activating the amp or climbing. 
* Automatic Climbing (Serena): The climber has been revamped to deal with the fact that one arm of the climber will come into contact with the chain first. This involves a voltage reader. 
* Limelight work (Me, Davey, Zach): This was one very long annoying process. The morning was spent trying to train a neural net to recognise a ring, which kept failing to recognise the difference between a normal note and a high note. After lunch was more attempted training of the limelight before we found a site called Roboflow, which we thought would solve our problem. It did not, as none of the available file types were compatible with limelight. Then it turned out that we were just importing images to train something else, and that either there are two different .vpr files or that the limelight is compatible with Vocaloid. Then the limelight OS needed to be updated. 