/*
 * Name: Josh Moore
 * Assignment: Loops
 * Date: 05 July 2023
 * Description: Use loops to create three different actions on the canvas.
 * Log:
 * - 05 July 2023: Completed Task 5 of Ever Larger, until not
 */
var circleSize = 0;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 400px - 400px
    createCanvas(400,400);

    // Sets the Frame Rate to 24 frames per second.
    frameRate(24);
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    // Set background color
    background("#546800");

    // Increases the global variable circleSize every frame.
    circleSize++;

    // Checks if the value of circleSize reaches above 200.
    // If above set value, resets variable back to 1.
    if(circleSize > 200) {
        circleSize = 1;
    }

    // Draws a circle every frame and increases its size by 1 pixel per frame.
    // Fills the circle with the color red.
    circle(195, 185, circleSize);
    fill("red");
}

// Call the functions to create the canvas and draw the objects on the canvas
setup();
draw();
