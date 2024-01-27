---
slug: 24BW3S
title: Limelight Hell Requiem
authors:
  - name: Augie
    title: "[REDACTED]"
  - name: Act of Liam
    title: Act of Liam
tags: [build season, limelight hell]
---
We got the limelight kind of working. It only took Act of Liam's help to do it. Anyway, things that happened today:
* Limelight fixes (Me, Act of Liam [C]): Specifically we got the limelight working with neural vision by downloading the public model, 
then setting our mode to "detector". Then you go into the "configuration" tab, and upload your tensor flow lite model.
* Getting a TFlite file (Me, Chris [M]): This was the hardest part. While we had figured out how to get a TFlite file working, that didn't mean we had a TFlite file to work with. The process for doing that included, among other things: Downloading Python to try and install Tensorflow to get the converter; messing with the command line to try and get pip to work with python; Discovering that TFRecord files are not photos; Asking the MPArors for their TFlite file; And accidentally using the wrong file and needing to completely reset the limelight. But we can finally get the limelight to recognize notes. 
* Pathing work (Griffin): Many new paths were made for autopickup, along with a new command to facilitate such.
* Autoaim work (Serena, Rowan): The math to calculate the speaker angle and aim while moving was completed. 
* Lights Work (Davey): Davey made a design for where the lights should be and looked at the 2023 LED code. The 2022 light code is better IMO. 

There was also a party after practice, but that is beyond the scope of this blog.