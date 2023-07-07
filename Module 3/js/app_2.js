/*
 * Name: Josh Moore
 * Assignment: Loop Exercises
 * Date: 07 July 2023
 * Description: Use loops to create a drawing
 * Log:
 * - 07 July 2023: Completed the assignment for drawing
 */

// Variables
var completed = false;
var xCoord = 0, yCoord = 0;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 600);
    background("#547888");
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {

    // Ensures loop is ran only once.
    if(!completed) {

        // Fills the Squares with the color red.
        fill("red");

        // Outter Loop - Creates four columns of squares.
        for(let i = 0; i < 4; i++) {

            // Creates four rows of squares.
            // Adjusts the Y-Coordinate to ensure next drawn
            // square is below the previous one.
            for(let j = 0; j < 4 - i; j++) {
                square(xCoord, yCoord, 25);
                yCoord += 26;
            }

            // Moves starting point to next column
            // Resets yCoord to the xCoord to ensure
            // next square starts diagonally to the
            // previous one.
            xCoord += 26;
            yCoord = xCoord;
        }
    }

    // Ends the loop
    completed = true;
}