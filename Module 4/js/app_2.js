/*
 * Name: Josh Moore
 * Assignment: Dripping Water
 * Date: 08 July 2023
 * Description: Create the effect of water dripping down the canvas
 * Log:
 * - 08 July 2023: Created methods and array for the droplets.
 * - 09 July 2023: Altered functions to using class objects for droplets.
 */

// Variables
var water = [];

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

    // Redraws the background to ensure previously drawn objects are removed.
    background("#547888");

    // Every 10 frames a new ellipse is created.
    if(frameCount % 10 == 0) {
        water[water.length] = new droplet(getRandomLocation());
    }

    // For every water droplet move the water down 5 pixels in the Y direction
    // every frame.
    for(let i = 0; i < water.length; i++) {
        water[i].move();
        water[i].show();
    }

    // Once the lowest (always first in array) droplet goes beyond the canvas
    // remove from array to ensure array is not too large.
    popLowest();
}

/**
 * @method popLowest
 * @description Checks the Y-Coordinate of the first Droplet object in the array. If the coordinate
 * is below 615 pixels, then the object is removed from the array.
 */
function popLowest() {
    // To ensure no error occurs during the first run of the creation of the object
    // this if statment prevents an error.
    if(water.length != 0) {

        // Checks if the droplet is below 615 pixels.
        if(water[0].isBelow()) {

            // Removes the first element in the array.
            water.shift();
        }
    }
}

/**
 * @method getRandomLocation
 * @description Generates a random location from 0 - 800, the width of the canvas in pixels.
 * @returns Integer
 */
function getRandomLocation() {
    let ret = Math.random();

    ret *= 800;
    ret = Math.floor(ret);

    return ret;
}

/**
 * @class Droplet
 * @description Creates a class holding the X/Y coordinates of the ellipse. Contains the methods
 * of both displaying and moving the Y-Coordinate of the ellipse.
 */
class droplet {

    /**
     * @constructor
     * @param {*} valueX - Starting point of the Ellipse. Uses this to determine where to
     * draw the ellipse on the canvas.
     */
    constructor(valueX) {
        this.x = valueX;
        this.y = 0;
    }

    /**
     * @method isBelow
     * @description Checks if the value of the Y Coordinate is at or below 615 pixels. Returns a
     * boolean value.
     * @returns True - if objects Y-Coordinate value is at or below 615 pixels; Otherwise False.
     */
    isBelow() {
        return this.y >= 615;
    }

    /**
     * @method move
     * @description Moves the ellipse Y coordinate by 5 pixels.
     */
    move() {
        this.y += 5;
    }

    /**
     * @method show
     * @description Fills the ellipse with the color "blue" and draws an ellipse at the coordinates
     * of the stored X and Y values within this object.
     */
    show() {
        fill("blue");
        ellipse(this.x, this.y, 15, 30);
    }
}