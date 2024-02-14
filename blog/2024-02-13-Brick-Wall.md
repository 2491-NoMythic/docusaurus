---
slug: 24BW6T
title: Brick Wall
authors:
  - name: Augie
    title: "[REDACTED]"
tags: [build season]
---
Davey is the new music person. Also I have a headache again.
* LED Work (Davey and I): The first chunk of practice was spent trying to find LEDs to test the code with. After learning that none of the LED strips had working adapters, we decided to go look for Moira's old sponsor board. This took us to the backend of the gym closet twice, all over the shop, and at the end we learned that the board had probably been thrown out. Then we tried to jury-rig together a working adapter before Chris showed up with definetly working LED strips, which had to have a jury-rigged adapter anyway. Then we tried to test the code and the Vera-be-damned thing tried to call LED 204. We only had 52 lights in the code. This turned out to be because we were creating one less LED in the code than actually existed (that number was 24 by the way) and then tried to call the last LED which according to the code didn't exist. After dinner we discovered that error and fixed it, before finally getting the lights to work. Then we learned that we could have just used the functional lights branch that hadn't been merged with main yet. By that point I was willing to call it quits, but we kept going and even got the lights to actually respond to the code. 
* Button Binding Work (Zach, Griffin): These two made a new button diagram and re-bound all the buttons so that everything works. They also added a bunch of things to Smart Dashboard.
* Collect Note Work (Rowan, Serena): Debugging is occuring on the collect note command. That is all Serena will tell me.

That is all. 