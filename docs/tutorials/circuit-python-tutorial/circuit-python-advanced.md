---
sidebar_position: 5
---
# Circuit Python: Advanced
This is a page for those that feel comfortable with the code that was on the other pages. If you don't feel comfortable with that stuff yet, I would suggest you head back and experiment. Think of something you could do with the neopixels and play with the code.

## Next steps
Ok, there are no solutions on this page. You now know the basic building blocks, and it is time to write more code based on a suggestion. So here is a list of ideas. You don't need to do them in order either. Feels free to use Google, or the Adfruit learning guides, or the circuit python documentation. If you need help, look back at other examples we already did. Ask a team mate. If you are really stuck, ask a mentor.

* Play 2 different tones when pressing the two different buttons.
* * Did you play a tone for a specific time? Or turn it off when you let go of the button?
* * Did you create a function that played the tone? Did you need to?
* Play a different tone for every one of the touch pads.
* Store several notes in an list, and use a loop to play all of them.
* * If you need some help with a list of playing a song, you can try [here.](https://learn.adafruit.com/basic-datastructures-in-circuitpython/overview) However, the examples of playing notes are not the same on the Circuit Playground Express. You will also have to look up how to play a tone.
* Listen for a noise, and play a tone or turn on a pixel if the noise is too loud.
* Measure the temperature. Hold your finger on the temp sensor to see the changes.
* * Print the current temperature to the console.
* * Show the temperature by changing the colors of the pixels.
* * * You can show set temperature ranges, or a continuous change of colors.
* * Create a round thermometer showing cold to hot by number of pixels shown.
* Measure the light level. Cover the sensor with your hand to see the changes.
* Print the current level to the console.
* * Play a tone based on the light level
* * * Show less pixels on if the light is low, more if it is bright
* Use the accelerometer.
* * Change the tone played depending on the angle of the board left to right.
* * Change the pixel displayed based on the angle of the board in both left to right and forward and back.
* Use the neopixel library to control an external set of neopixels
* * Set the color for the whole string
* * Change the color for each pixel
* * Create a 'moving' animation
* Control a servo connected to the device
* * Have it turn forward with button_a, and backward with button_b
* * Have it move to different positions based on the touch pad pressed
* Create the game of Simon.
* * The board will show random lights, the user will then need to touch the right touch pads to continue
* * Can you make the game get harder by increasing the speed or number of lights shown?


## Sources
[GitHub Origin](https://github.com/2491-NoMythic/circuitPython/wiki/5.Advanced)