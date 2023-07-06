/*
 * Name: Josh Moore
 * Assignment: Loops
 * Date: 05 July 2023
 * Description: Use loops to create three different actions on the canvas.
 * Log:
 * - 05 July 2023: Completed Task 2 of Puck Side
 */

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 400px - 300px
    createCanvas(400,300);
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    // Set background color
    background("#547800");

    // Draw Circle at location of Mouse.
    circle(mouseX, mouseY, 30);

    // Use the fill to color the circle based on
    // intensity of the location of the mouse.
    // Closer right makes red, closer left makes blue.
    fill(getRedIntensity(), 0, getBlueIntensity());
}

/**
 * @method getRedIntensity
 * @description Using a formula and the location of the X-coordinate of the mouse.
 *              Determine the color intensity.
 * @returns Integer Value
 */
function getRedIntensity() {
    if(mouseX >= 200) {
        return Math.floor(mouseX/2);
    } else {
        return 0;
    }
}

/**
 * @method getBlueIntensity
 * @description Using a formula and the location of the X-coordinate of the mouse.
 *              Determine the color intensity.
 * @returns Integer Value
 */
function getBlueIntensity() {
    if(mouseX <= 200) {
        return Math.floor(255 - mouseX);
    } else {
        return 0;
    }
}

// Call the functions to create the canvas and draw the objects on the canvas
setup();
draw();
