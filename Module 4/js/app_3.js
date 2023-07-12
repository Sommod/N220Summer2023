/*
 * Name: Josh Moore
 * Assignment: Click to Drop
 * Date: 11 July 2023
 * Description: Have the application draw a brick and have it drop every frame by 5 pixels.
 * Log:
 * - 11 July 2023: Completed assignment for Click To Drop.
 */

// Variables
var bricksX = [], bricksY = [];

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 600);

    // Set the initial background.
    background("#547888");
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {

    // Redraws the background to remove previously drawn shapes.
    background("#547888");
    
    // Ensures the rest of the code is only ran if there is any values within the arrays.
    if(bricksX.length != 0) {

        // Moves the brick down by 5 pixels per frame.
        alter();

        // A loop displaying all the bricks clicked on screen.
        for(let i = 0; i < bricksX.length; i++) {
            /**
             * For an interesting found bug that makes the bricks speed up the more bricks on
             * screen and slower when less are on screen, uncomment this method and comment out the above one.
             */
            //alter();
            display(bricksX[i], bricksY[i]);
        }

        // Removes the lowest (first) brick to pass the bottom of the canvas.
        if(bricksY[0] + 10 >= 600) {
            removeBrick();
        }
    }
}

/**
 * @method alter
 * @description Alters the arrays and their values to have the stored Y-Value increase by 5 pixels every frame.
 */
function alter() {
    for(let i = 0; i < bricksY.length; i++) {
        bricksY[i] += 5;
    }
}

/**
 * @method display
 * @description Displays the brick on screen every frame.
 * 
 * @param {*} posX 
 * @param {*} posY 
 */
function display(posX, posY) {
    fill("brown");
    rect(posX, posY, 30, 20);
}

/**
 * @method mouseClicked
 * @description Creates a new 'brick' with the location of the mouse every time the canvas is clicked. The values
 * of the mouse are then stored into an array to change and display the change.
 */
function mouseClicked() {
    if(bricksX.length != 0) {
        bricksX[bricksX.length] = mouseX - 10;
        bricksY[bricksY.length] = mouseY - 10;
    } else {
        bricksX[0] = mouseX - 10;
        bricksY[0] = mouseY - 10;
    }
}

/**
 * @method removeBrick
 * @description Removes the first element in the array.
 */
function removeBrick() {
    bricksX.shift();
    bricksY.shift();
}