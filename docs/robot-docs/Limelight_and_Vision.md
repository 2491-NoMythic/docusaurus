# Limelights and Vision

## Limelight Basics
Limelights are the primary system we use to see with the robot. They need to be set up before use. If you want to know how to do that, then follow this [link](https://docs.limelightvision.io/en/latest/getting_started.html) to the official Limelight website, which explains far better than I can. If the Limelight has been used by the team before, check before flashing new firmware. An important note is that you need to use a power over ethernet cable for power. Teams have experienced issues plugging the ethernet cable into the second port on the radio, so it is recommended to use an ethernet network switch to run both the RoboRio and the Limelight on the same sytem. 

## Limelight and Motors
``` java

```

## Limelight and LEDs
``` java

``` 

## Neural Networking
It is possible, although difficult, to get a limelight to recognise images using a neural net. The actual limelight setup is fairly simple, assuming one has a Google Coral to attach to the limelight. This provides the processing power to run the neural network that can actually identify things. Once the Coral is attached, go to limelight configuration and change the mode to 'Detector'. The official website says 'Neural Detector'. Ignore it, the docs are outdated. Then go over to the configuration tab, and upload your neural net. Do not use the upload button at the top of the page, that is for something else. The actually hard part is getting the neural net in the first place. The main issue is that the thing only accepts TFLite files, which are a pain in the ass to make. There are three ways to get this file. The first is to just download it from someone else. While this is the fastest method, the official limelight website doesn't have a network for any game besides Charged Up. As such, the only way to get one is to: 
    1. Have a contact on another team 
    2. That has put in the time and effort to make one
    3. And is willing to share it with you.
This is not the most likely of scenarios. The second option is to find a non-TFlite neural net or file collection and try and convert it to TFlite. This requires sucessfully running Tensorflow through Pip through Python, in all likelyhood on Windows. The third and probably easiest way is to just train a neural net yourself. This requires a lot of time and effort and a program that can train neural nets and output a TFlite file, but is also the most achievable assuming one has a laptop with a camera.