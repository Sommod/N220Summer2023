/*
 * Name: Josh Moore
 * Assignment: Loop Exercises
 * Date: 07 July 2023
 * Description: Use loops to create a drawing
 * Log:
 * - 07 July 2023: Completed the assignment for drawing
 */

// Variables
var xCoord = 10, yCoord = 10;
var completed = false;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(1000, 600);

    // Set background color of the canvas
    background("#547888");
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    
    // Runs check to ensure only once is the for-loop ran.
    if(!completed) {

        // Creates different shapes and colors based on numerical
        // value of i.
        for(let i = 1; i < 26; i++) {

            // Creates a blue square if modulus of i is 0
            // by both the value of 3 and 5.
            if(i % 3 == 0 && i % 5 == 0 && i != 0) {
                fill("blue");
                square(xCoord, yCoord, 10);

            // creates a purple circle when the modulus of i
            // is 0 from the value of 3 only
            } else if(i % 3 == 0 && i != 0) {
                fill("purple");
                circle(xCoord, yCoord, 10);

            // Creates a green square when the modulus of i
            // is 0 from the value of 5 only
            } else if(i % 5 == 0 && i != 0) {
                fill("green");
                square(xCoord, yCoord, 10);

            // Draws a black circle on the canvas
            } else {
                fill("black");
                circle(xCoord, yCoord, 10);
            }

            // Adds an additional 15 pixels to the X-Coordinate every loop.
            xCoord += 15;
        }
    }

    // Ensures loop is ran only once.
    completed = true;
}