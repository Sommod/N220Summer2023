/*
 * Name: Josh Moore
 * Assignment: Click for Random
 * Date: 28 July 2023
 * Description: Using P5, create a circle that will change color when clicked.
 * Log:
 * - 28 July 2023: Completed assignment of changing circle color when clicked.
 */

// Variables
let colors = ["Red", "Green", "Blue", "Yellow"];
let picker = 0;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 600);
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    background("#547888");

    fill(colors[picker]);
    circle(400, 300, 100);
}

/**
 * @function mouseClicked
 * @description Detects if the mouse is clicked within the drawn object. If so, then the color
 * of the object will change.
 * 
 * @returns False - Default handle
 */
function mouseClicked() {
    let d = dist(mouseX, mouseY, 400, 300);

    if(d < 50)
        changeColor();

    return false;
}

/**
 * @function changeColor
 * @description Changes the color choice from the array and sets the color to the circle.
 */
function changeColor() {
    picker = Math.floor(Math.random() * 4);
}