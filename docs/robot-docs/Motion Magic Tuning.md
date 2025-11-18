Found this on ChiefDelphi, decided to port it over here for ease of access. I also slightly edited it. 

***

Jerry here … I am the mentor in the 2767 Talon SRX training.

When tuning motion magic you might follow these steps:

1. Put the Talon in velocity mode
2. Set the current limit to protect the motor and mechanics.
3. Zero out F, P, I, D
4. Command a midrange velocity (remember you are in velocity mode)
5. Start increasing F until the motor runs about the commanded speed (with all the values set at zero, nothing will move until you start increasing F)
6. Once you get F set to a level where the motor runs about the commanded speed, you then command the motor to run several different speeds. Pick a low, mid, and high depending on the intended speed range you plan to use. Look at the error on all three speeds anddecide if you need to tweak F a little. The goal it to get the motor to run approximately the commanded speed. It won’t be exact. It is a “best fit” given the range of motor speeds you plan to use.
7. Change the mode to Motion Magic.
8. You will need to select a starting point for Accel, Cruise, and P. If F is about right, then the cruise speed you select is thespeed the motor will run as it approaches target endpoint (remember that you have really switched to a position control loop onceyou select Motion Magic)
9. You then tune P, I, D just like you would for a normal position loop. Cruise will determine your max speed while the motor runstoward the target. Accel sets the ramp rate on motor acceleration and then slowdown.
10. I would advise setting the cruise at a middle of the road speed. Set your accel slow enough so that you can see it speed up andthen slow down. Make sure you see the expected cause and effect of the values. Increasing cruise should indeed increased the speed.Slowing accel does does indeed make it start and stop slower. Then as you increase P (you will need to have some small P value foranything to run), the accuracy of the finish point gets better and better. But if P gets too high, it will oscillate about the commanded endpoint target.
11. The Stryke Force Talon training course Chapter 8 starting at 30:11 walks thought the whole process.

As far as how to tune a PID loop, back up a few chapters in the talon training course. There is a full explanation. Once you get F set, Motion magic is tuned just like a position loop. The only difference is you now have Cruise and Accel to help control the start, stop and cruise rates.

Hopefully this provides a little bit of clarity.

CTR does a great job of walking you though the process if you want to approach it mathematically. The above approach is more of a seat of you pants method using the actual hardware.

Jerry (Mentor on 2767)