/*
 * Name: Josh Moore
 * Assignment: Neapolitan
 * Date: 08 July 2023
 * Description: Create an array of strings of colors. Using the array and a loop, create a rectangle with the different colors.
 * Log:
 * - 08 July 2023: Completed assignment of Neapolitan Ice Cream style rectangles.
 */

// Variables
var xCoord = 0, yCoord = 0;
var completed = false;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 900px - 600px
    createCanvas(900, 600);
    //background("#547888");
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {

    // If statement to ensure code is only ran once.
    if(!completed) {

        // Array containing string color-codes for the 'fill' method.
        let colorArray = ["pink", "lightblue", "lightgreen"];

        // For loop going through each variable in the array.
        // Sets the fill color and draws the rectange according
        // to the global X/Y Variables.
        // Adjusts X Variable by 1/3 of canvas width.
        for(let c of colorArray) {
            fill(c);
            rect(xCoord, yCoord, xCoord + 300, yCoord + 600);
            xCoord += 300;
        }
    }

    // Stops the code from running again.
    completed = true;
}