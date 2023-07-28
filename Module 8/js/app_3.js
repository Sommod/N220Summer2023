/*
 * Name: Josh Moore
 * Assignment: Chase Mouse
 * Date: 28 July 2023
 * Description: Have a circle chase the mouse location. Have it change color to red when close.
 * Log:
 * - 28 July 2023: Completed assignment of mouse being chased.
 */
let xPos = 100;
let yPos = 100;
let choice = true;

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

    fill(choice ? "Black" : "Red");
    circle(xPos, yPos, 50);

    move();
}

/**
 * @function move
 * @description Moves the circle based on the distance and location of the mouse. If the mouse within a 7 pixel range, then the color
 * of the circle will change.
 */
function move() {
    let d = dist(mouseX, mouseY, xPos, yPos);

    if(d > 25) {
        xPos += (mouseX > xPos ? 3 : -3);
        yPos += (mouseY > yPos ? 3 : -3);
    }

    if(d < 32)
        choice = false;
    else
        choice = true;
}