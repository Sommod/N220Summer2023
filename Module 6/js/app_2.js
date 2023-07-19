/*
 * Name: Josh Moore
 * Assignment: Animated Object
 * Date: 18 July 2023
 * Description: Using objects, store the data to then draw onto the P5 canvas.
 * Log:
 * - 18 July 2023: Completed Assignment for drawing object onto screen.
 */

// Variables
let obj = null;
let direction = true;

/**
 * @class myObject
 * @classdesc An object to hold the data for the animated object.
 */
class myObject {
    #x;
    #y;
    #size;

    /**
     * 
     * @param {int} x - X-Coordinate for the Circle.
     * @param {int} y - Y-Coordinate for the Circle.
     * @param {int} size - Size in pixels of the circle.
     */
    constructor(x, y, size) {
        this.#x = x;
        this.#y = y;
        this.#size = size;
    }

    /**
     * @method getX
     * @description Gets the current objects X-location.
     * @returns int - X-Coordinate of the circle.
     */
    getX() { return this.#x; }

    /**
     * @method getY
     * @description Gets the objects Y-location.
     * @returns int - Y-Coordinate of the circle.
     */
    getY() { return this.#y; }

    /**
     * @method getSize
     * @description Gets the size of the circle.
     * @returns int - Size of the circle radius in pixels.
     */
    getSize() { return this.#size; }

    /**
     * @method changeX
     * @description Intakes a value to set as the new X-Coordinate.
     * @param {int} value - new Value of X.
     */
    changeX(value) { this.#x = value; }

    /**
     * @method changeY
     * @description Intakes a value to set as the new Y-Coordinate.
     * @param {int} value - new Value of Y.
     */
    changeY(value) { this.#y = value; }

    /**
     * @method changeSize
     * @description Sets the new size of the circle.
     * @param {int} value - New Value of Size.
     */
    changeSize(value) { this.#size = value; }

}

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(600, 600);
    obj = new myObject(300, 300, 5);
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    background("#547888");
    circle(obj.getX(), obj.getY(), obj.getSize());

    // Checks which direction the circle is going. If the circle is going
    // South-East (Bottom-Right) or North-West (Top-Left).
    if(direction) {
        obj.changeX(obj.getX() + 1);
        obj.changeY(obj.getY() + 1);

        // If object's X value is at or above 300, and increasing,
        // then increase size, otherwise decrease size.
        if(obj.getX() >= 300) {
            obj.changeSize(obj.getSize() + 1);
        } else {
            obj.changeSize(obj.getSize() - 1);
        }

        // Determines when to change direction of object.
        if(obj.getX() + obj.getSize() >= 600) {
            direction = false;
        }
    } else {
        obj.changeX(obj.getX() - 1);
        obj.changeY(obj.getY() - 1);

        // If object's X value is at or above 300, and decreasing,
        // then decrease size, otherwise increase.
        if(obj.getX() >= 300) {
            obj.changeSize(obj.getSize() - 1);
        } else {
            obj.changeSize(obj.getSize() + 1);
        }

        if(obj.getX() - obj.getSize() <= 0) {
            direction = true;
        }
    }
}