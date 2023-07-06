/*
 * Name: Josh Moore
 * Assignment: Loops
 * Date: 05 July 2023
 * Description: Use loops to create three different actions on the canvas.
 * Log:
 * - 05 July 2023: Completed Task 3 of World Wrap.
 */

// Variables
let xCoord = 0;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800,600);

    // Set Frame rate to 24 to ensure drawn objects can be seen
    frameRate(24);
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    background("#546800");

    // Updates the X-Coordinate variable every frame.
    // Increases by 5 pixels per frame.
    xCoord += 5;

    // Checks if the X-Coordinate reaches the edge of the canvas.
    // If the value is greater than the size of the canvas, reset
    // value to 0.
    if(xCoord > 800) {
        xCoord = 0;
    }

    // Draw circle and fill circle with a Red Color.
    circle(xCoord, 50, 30);
    fill("red");
}

// Call the functions to create the canvas and draw the objects on the canvas
setup();
draw();
