---
slug: 24CW3T
title: General Status Update 11
authors:
  - name: Augie
    title: "[REDACTED]"
tags: [competition season]
---
I took the ACT today and am tired. Things that happened today:
* Robot Testing (Xiaohan, Rowan, Griffin, Zach, Serena, and I): There was a lot of testing on the comp bot today. The first things to do were to make sure the intake was working and deal with a wheel issue. The wheel issue, as far as I can tell, is that one of the wheels is incosistently moving with the opposite speed and direction to the other three wheels. This is bad for a variety of reasons. Griffin's job was to deploy Duluth code we knew was consistent when the the motor went wrong. There was a lot of Phoenix Tuner testing and comparing motor speeds. We eventually discovered that the Back Right Motor Encoder was broken so thoroughly that it was drawing 18 amps to run at something like 0.1 meters per second. For comparison, a working motor takes 1 amp to run at 1 meter per second. Build had to replace the entire motor. After dinner we had access to the gym. The first test was the intake again. One of the first discoveries was that the best results were from driving backwards at low speeds. Driving forwards could hold the note but not fully intake it, and collection at high speeds was difficult. Next we tested move meters. It worked. Then we tried doing amp shots. This did not work.
* Move Meters Command (Davey, Serena): These two created a command that takes a bunch of fancy math stuff and some speeds and lets us set a very specific amount of meters to move the robot. 
* Return of an Old Friend (Rowan, Zach): Captain 23 once again saved our asses by adjusting our limelight code to use a new and more reliable library.
* Indexer Backup (Zach): We were having some issues with the note being moved too far forwards. The quick-fix was to add a button to run the intake backwards. 
* Data Logging (Griffin): Griffin worked on the data logging project. There is now completed code for the intake and Robot Container.

That's all for tonight.