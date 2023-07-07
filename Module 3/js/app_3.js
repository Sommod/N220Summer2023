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

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 800);
    background("#547888");
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    
    // Ensures loop is ran only once.
    if(!completed) {
        
        // Loops until the thickness of the circle is 0.
        // Steps by 25.
        for(let i = 800; i > 0; i -= 25) {
            circle(400, 400, i);
        }
    }

    // Stops the loop
    completed = true;
}