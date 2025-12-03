---
sidebar_position: 4
---

# Circuit Python: Simple Program Steps
Here we will start with a very basic program and have you build on it step by step. We will mostly use the neopixels here to teach basic programming in Python.

## Simple Program
If you were at one of our experience the team nights you might remember something similar to this:
```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.pixels[0] = (100, 0, 0)
```
If you don't understand the import or while, head back to Getting Started. Instead of just turning on the red LED, we check if button_a is pressed, and then turn on a neopixel. if is how we make decisions in Python. If our condition is `True`, then do something after the ":". Our condition is whether the button_a is pressed, so if button_a is pressed, our condition is `True`, and the block therefore is executed.

Remember, the code block is what is indented, and we have another set of spaces, or another tab for the neopixel line. This time we can't set the neopixel to `True` to turn it on, we need to tell it the combination of red, green and blue needed to make the neopixel, and we have to tell it which pixel we are setting. Do tou see the [0]?. In programming we often start with 0 instead of 1 to mean the first item. Just like in math we assign the right hand side to the lefthand side. So we are using the `cp` library to set pixels[0] to a color of (100, 0, 0) which is a red. Try it.

When you run this code and press button_a, the neopixel goes red- but it never turns off. Do you know why?

## Else
If you guessed that we never turned it off, you are correct. How would we turn it off if the button isn't pressed? We write an `else`. Basically it means that if the `if` it is after is `False`, it is `True`. 
```python

from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.pixels[0] = (100, 0, 0)
    else:
        cp.pixels[0] = (0,0,0)
```
Notice that there is no "off". We just set the pixel to not show any red or green or blue. Now when you run this, the pixel only lights up while the button is pressed.

## Double your fun
How about getting two pixels to light up? How about pixels 0 and 1?
```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.pixels[0] = (100, 0, 0)
        cp.pixels[1] = (0, 100, 0)
```
Now we have 2 pixels on. But we are back to not turning off again. Try putting in the else to turn off both pixels.

How about all the pixels. Can you write a program to get them all to turn on?

Did you remember to turn them all off? What about colors. Any different colors? Experiment.

There are two buttons. cp.button_a, and cp.button_b. Try these ideas next.

* Turn on left side lights with button a. Turn on right side with button b.
* Make all turn on red with button a. Make all turn on green with button b.

## Lots of Repeated Lines
If you were turning all the light on and off, you may have had code that looked very much like this:
```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.pixels[0] = (100, 0, 0)
        cp.pixels[1] = (100, 0, 0)
        cp.pixels[2] = (100, 0, 0)
        cp.pixels[3] = (100, 0, 0)
        cp.pixels[4] = (100, 0, 0)
        cp.pixels[5] = (100, 0, 0)
        cp.pixels[6] = (100, 0, 0)
        cp.pixels[7] = (100, 0, 0)
        cp.pixels[8] = (100, 0, 0)
        cp.pixels[9] = (100, 0, 0)
    else:
        cp.pixels[0] = (0,0,0)
        cp.pixels[1] = (0,0,0)
        cp.pixels[2] = (0,0,0)
        cp.pixels[3] = (0,0,0)
        cp.pixels[4] = (0,0,0)
        cp.pixels[5] = (0,0,0)
        cp.pixels[6] = (0,0,0)
        cp.pixels[7] = (0,0,0)
        cp.pixels[8] = (0,0,0)
        cp.pixels[9] = (0,0,0)
```
Whew. That was a lot of typing. I hope you at least cut and pasted the lines. But you can always make mistakes that way, or maybe forget to increase the pixel id in between the [ ].

We want to reduce the amount of code we write. We are doing the same thing over and over with one very small change. Loops are a way we can accomplish this. But first, a quick into to variables.

## Variables
If you have done any algebra, you know about variables. Look at this math equation and substitution of x:
```python
x = 1
y = 2(x) + 3
y = 2(1) + 3
y = 5
```
We used variable x to solve for y. Programming variables work very similarly, but they can be boolean, strings, or numbers (or other things we will get to). Check out this version of turning on one neopixel. Note the very simple change.
```python
from adafruit_circuitplayground import cp

while True:
    index = 0
    if cp.button_a:
        cp.pixels[index] = (100, 0, 0)
    else:
        cp.pixels[index] = (0,0,0)
```
We didn't say to turn on pixel 0, we said to turn on pixel index. We had set it to zero, so this does the same thing. Can you change this to set neopixel 4 on and off instead of 0?

If we wanted to update the index we could.
```python
from adafruit_circuitplayground import cp

while True:
    index = 0
    if cp.button_a:
        cp.pixels[index] = (100, 0, 0)
        index = 1
        cp.pixels[index] = (100, 0, 0)
    else:
        cp.pixels[index] = (0,0,0)
        index = 1
        cp.pixels[index] = (0,0,0)
```
What did that do? Was that the same as our program that used 0 and 1? Lets change that just slightly to do a bit of math instead.

from adafruit_circuitplayground import cp
```python
while True:
    index = 0
    if cp.button_a:
        cp.pixels[index] = (100, 0, 0)
        index = index + 1
        cp.pixels[index] = (100, 0, 0)
    else:
        cp.pixels[index] = (0,0,0)
        index = index + 1
        cp.pixels[index] = (0,0,0)
```
Did that do anything different? It shouldn't. It should work just the same, but we took the 0 and added 1 to it instead. So we still got pixels 0 and 1. Now, how would you get pixels 2 and 4 to light up instead?

Change the 0 to 2, and instead of + 1, do + 2:

from adafruit_circuitplayground import cp
```python
while True:
    index = 2
    if cp.button_a:
        cp.pixels[index] = (100, 0, 0)
        index = index + 2
        cp.pixels[index] = (100, 0, 0)
    else:
        cp.pixels[index] = (0,0,0)
        index = index + 2
        cp.pixels[index] = (0,0,0)
```
Could you keep doing this to light up or turn off all the pixels? Sure, you could, but we have a better way.

## Loop-de-Loop
Now that we can see how variables work, and that they can change values, we talk about loops. We are going to talk about a `for` loop. Basically we are going to assign a variable several values from a range of values, and execute our formula, or code block for each variable.

`for x in range(0, 3):` would tell us that our variable x will start out as 0, and run 3 times (0, 1, 2). It doesn't mean 0 to 3. If the statement was `for x in range(4, 3):` then x would start at 4, and still run 3 times (4, 5, 6). Let's turn 5 pixels on and off with a `for` loop.
```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        for index in range(0, 5):
            cp.pixels[index] = (100, 0, 0)
    else:
        for index in range(0, 5):
            cp.pixels[index] = (0,0,0)
```
Woah, that was a lot less code.

Now try a couple more things like before, but use loops:

* change to set pixels 5 to 9 instead of 0 to 4.
* do left side with button_a, and right side with button_b

## Functions

When we first started talking about variables, we talked about a math function to calculate y, which was y = 2x + 3.We make functions in programming like that too, as repeatable sections of code. They don't need to solve math problems, but they can. Let's write that math problem as a python function:
```python
def calcY(x):
    y = x * 2 + 3
    return y
```
We can now call this function in python code, and it. We will use a function that comes with python called `print` that will print to the console. Check with a mentor if you need help to display your console.
```python
def calcY(x):
    y = x * 2 + 3
    return y

x = 1
y = calc(x)
print(y)

print(calcY(3))
```
That code defined our function, then showed two ways of printing to the console the output of the function. Do you get what you thought?

Ok, you are bored. I get that. Let's get back to pixels. Functions don't need to take parameters, and they don't need to return a value. You could write a function like this too:
```python
def showPixelOne():
    cp.pixels[1] = (100, 0, 0)
    return
```
Now when ever we want to set pixel 1 to red, we can call this. But... let's step it up a notch. The last pixel program we wrote used 2 different loops to turn the pixels on or off. Can you re-write that program (we all that refactoring) to use 2 different functions? One that turns on all the pixels, and one that turns off all the pixels?

This is one way it might look:
```python
from adafruit_circuitplayground import cp

def turnPixelsOn():
    for index in range(0, 10):
        cp.pixels[index] = (100, 0, 0)
    return

def turnPixelsOff():
    for index in range(0, 10):
        cp.pixels[index] = (0, 0, 0)
    return

while True:
    if cp.button_a:
        turnPixelsOn()
    else:
        turnPixelsOff()
```
Let's look at this a bit. Is this code any better? There are actually more lines of code, so it might seem to be not a good idea to do this, but there are benefits. If you were to ignore the functions and jump to the while true: part of the code, could you understand what it did? You could because the function names were created to explain what they did. If they were just called doStuff(), or pixels() or on(), the names don't tell you enough. In a longer program that is important.

## Flexible functions

Take a look at the functions we wrote. We wrote 2 of them. It was a good start, but could we only write one? What would we need to pass as parameters? Would the function get too complicated? Can you thing of a few different ways it could be done to turn pixels on and off?

I have a few ideas:

* Pass a boolean to the function to mean on and off
* Pass a number for the first "red" color. You could then pick any red, or 0 for off.
* Pass the entire color! Mind blown. Remember I said a variable could be more than just a number? Lets try that!

from adafruit_circuitplayground import cp
```python
def turnAllPixelsToColor(color):
    for index in range(0, 10):
        cp.pixels[index] = color
    return

red = (100, 0, 0)
off = (0, 0, 0)

while True:
    if cp.button_a:
        turnAllPixelsToColor(red)
    else:
        turnAllPixelsToColor(off)
```
Was your solution similar? Does the function need to be more flexible? Could we pass in the start and number of pixels to use in the loop? Of course you can. Should you? Ask your self if you need to now. If the goal was to turn all the pixels off and on, then don't make the function more complicated than it needs to be. Don't be afraid to refactor when what the code needs to do changes.

Now try to write the code and functions so that it uses two buttons.

* Turn all of the pixels on when button_a is pressed, but only off when button_b is pressed
* Set the left to red when button_a is pressed, and right to green when button_b is pressed

How did you make the changes? How many functions did you use? Did you need to refactor the functions at all?

## Tada!
Guess what? You are now a programmer. Most of what we do as programmers we have just discussed. We created functions, we call them, we do a bit of math, we do loops, we call functions in other libraries. Is there more to learn? Of course. Check out the Advanced page.

## Sources
[GitHub Origin](https://github.com/2491-NoMythic/circuitPython/wiki/4.Step-By-Step)