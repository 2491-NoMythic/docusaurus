---
sidebar_position: 3
---

# Circuit Python: Getting Started
We will be programming in Circuit Python. These devices can be programmed in MakeCode with blocks or Javascript, or using the Arduino IDE even. Here, we will use Circuit Python, which is a subset of Python. A lot of what you can do in Python you can also do in Circuit Python, but a few things needed to change in order to fit onto the tiny bit of memory these devices have.

## Getting Started
There are a couple of conventions we need to follow to make everything work. First, CircuitPython needs to be installed. If you are getting a board from the Robotics Team, then we have done this for you. Otherwise look [here.](https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart)

After the install when you plug in the device, you should get a removable device that shows up called CIRCUITPY. This works just like a removable drive does. The really neat thing is that you can drag and drop files to the device. In fact, that is how you get your code to it!

The Adafruit docs will all refer to the the Mu editor. Any program that can edit and save text files can be used. The way to make sure your program is read by the device is to use the code.py file name. If you save a file to the device called `code.py`, it will reboot and start to run that python program. It is often best to just open the existing `code.py` file on the device so a save will automatically save back to the device.

## Libraries
What can we do? Can we turn on a neopixel in our first program? Yes and no. Our first program will be to turn on a neopixel, but first we need to get a library to access the hardware. We installed Circuit Python, so we have the basic language installed. We can do some math, we can do loops and make decisions, but the basic Circuit Python install doesn't know how to access the hardware. We need a library for that. A library is some code that someone else has written that knows how to interact with something else, often some hardware. Just like how physical books have information on specific topics, or how Neo downloaded how to do Kung-Fu in the matrix, we will get a library to help us. We will use CPX. More on that library and the things it can do [here.](https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express)
 
When you plugged in your Circuit Playground Express and opened the CIRCUITPY drive you might have noticed a couple of things already there. There was probably a `code.py` file and an empty `lib` folder. This `lib` folder is where we will put any libraries that we need to use. We need to get them first though. You can download libraries at [circuitpython.org](https://circuitpython.org/libraries) The Circuit Python version and the version of the library needs to be the same version.

All of the libraries available will not fit onto our device. There isn't enough room. You will need to copy files into the lib folder if you want to use them. Fortunately, there is one special library already installed. We just need to use it. With it we can access the basic parts of the hardware.
```python
from adafruit_circuitplayground import cp
```
Now we can use the "cp" library in our program. 

## First Program
Let's start with the Hello World of hardware devices: a blinky LED.
```python
from adafruit_circuitplayground import cp

while True:
    cp.red_led = True
```
Let's look at each line of our first program.
    We have already looked at the import. Any library we want to use will have a similar statement. We called this `import cp`.
    The `while True:` is part of standard python. This sets up a never ending loop. "While the condition is still true, keep repeating the code after the colon." `True` and `False` are called booleans, and can represent on/off or positive/negative or yes/no.
    The next line has spaces, or a tab. This is important in python. This is how blocks of code are defined. In our case, this is the block that will keep repeating forever. We just have one line here. It uses the `cp` library to access the red led on the board. Setting it to `True` will turn it on. Setting to `False` would turn it off.

Now save that code to the `code.py` file on the device.

That's it. You did it. You made a program run on a piece of hardware.

## Next Steps
Now, we need to learn about what other hardware we can use, and we need to learn a bit more Python along the way.

In the next part of this tutorial, I explain how to build a simple program step by step. I suggest you start there and work your way through.

But if you just want to see some basic code using the hardware, then check out the examples [here.](https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express/circuit-playground-express-library)

You could jump into learning more about the [hardware.](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

Just want the [documentation](https://docs.circuitpython.org/en/latest/README.html) for Circuit Python?

Want to dig into ready to run example code? Look at the library folder you downloaded. Inside each library is example code that you can copy over to your Circuit Playground device.


## Sources
[GitHub Origin](https://github.com/2491-NoMythic/circuitPython/wiki/3.Programming-(Getting-Started))