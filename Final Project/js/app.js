/*
 * Name: Josh Moore
 * Assignment: Final Project
 * Date: 09 August 2023
 * Description: Using the knowledge and information from this course, create an application using
 *              the principles learned.
 * Log:
 * - 09 August 2023: Completed the Final Assignment
 */

// Variables
let pp;
let cb = [];
let adjustValue;
let next = true;
let changeAuto;
let timer;
let speeder;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(1000, 1000);

    // Class for handling mathematical calculations
    pp = new PointPosition();
    
    // Initialization of adjust values
    adjustValue = 3;
    changeAuto = false;
    speeder = 30;
    timer = 0;

    // Creates dynamically the amount of circles
    for(let i = 1; i < 2; i++) {
        cb[(i - 1) + (3 * (i - 1))] = new CircleObject(20 * i, 0, next);
        cb[ i +      (3 * (i - 1))] = new CircleObject(20 * i, 90, next);
        cb[(i + 1) + (3 * (i - 1))] = new CircleObject(20 * i, 180, next);
        cb[(i + 2) + (3 * (i - 1))] = new CircleObject(20 * i, 270, next);

        next = !next;
    }

    document.getElementById("speeds").innerHTML = "" + adjustValue;
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    background("#547888");

    // Calculates the new location and draws it on the canvas
    for(let i of cb) {
        i.calculateNewDegree();
        i.changeXY(pp.calculateNewCoordinates(i.getRadius(), i.getDegree()));
        i.display();
    }

    // A simple timer used for handling automatic color changing.
    if(changeAuto) {
        if(timer < speeder)
            timer++;
        else {
            timer = 0;
            changeColorAutomatically();
        }
    }

    document.getElementById("colors").innerHTML = (changeAuto ? speeder + " per 60 Frames" : "Not Active");
}

/**
 * @function changeColorAutomatically
 * @description Goes through each of the CircleObject Objects and changes the color
 * to a new randomly selected color.
 */
function changeColorAutomatically() {
    for(let i of cb)
        i.getRandomColor();
}

/**
 * @function changeAutoColorSpeed
 * @description Increases or Decreases the Speed of the timer for automatic
 * color changing. The lower this value, the faster the color will change.
 * @param {Boolean} direction - True for slower progress
 */
function changeAutoColorSpeed(direction) {
    speeder += (direction ? 1 : -1);
}

/**
 * @function changeCircleSize
 * @description Adds or removes Circles from the CircleObject Array. The circles are
 * added on a the next 'layer' of the circles at the original startings points. The direction
 * in which they travel is keep by the 'next' variable.
 * @param {Boolean} direction - True for increasing Circle array size
 */
function changeCircleSize(direction) {
    if(direction) {
        let index = cb.length;
        cb[index] = new CircleObject(20 * (index / 4 + 1), 0, next);
        cb[index + 1] = new CircleObject(20 * (index / 4 + 1), 90, next);
        cb[index + 2] = new CircleObject(20 * (index / 4 + 1), 180, next);
        cb[index + 3] = new CircleObject(20 * (index / 4 + 1), 270, next);

        next = !next;
    } else {
        if(cb.length > 4) {
            for(let i = 0; i < 4; i++)
                cb.pop();

            next = !next;
        }
    }
}

/**
 * @function mouseClicked
 * @description using the P5js function, this changes the colors of the circles
 * manually.
 */
function mouseClicked() {
    for(let i of cb) {
        i.getRandomColor();
    }
}

/**
 * @function keyPressed
 * @description Using the P5js function, this changes the altering values that
 * adjust different aspects of the circles. Size, speed, color, automation are all
 * affected by their specific assigned key.
 */
function keyPressed() {
    if(keyCode == 65) // 65 A //68 D
        changeCircleSize(true);
    else if(keyCode == 68)
        changeCircleSize(false);
    else if(keyCode == 83) // 83 S // 87 W
        adjustValue -= 1;
    else if(keyCode == 87)
        adjustValue += 1;
    else if(keyCode === ENTER) {
        changeAuto = !changeAuto;
        speeder = 30;
    } else if(keyCode === UP_ARROW && changeAuto)
        changeAutoColorSpeed(false);
    else if(keyCode === DOWN_ARROW && changeAuto)
        changeAutoColorSpeed(true);


    document.getElementById("speeds").innerHTML = "" + adjustValue;
}

/**
 * @class CircleObject
 * @description A class that contains the information about the circle as well as
 * the method to draw the circle onto the canvas.
 */
class CircleObject {
    // Variables
    #x;
    #y;
    #radius;
    #degree
    #direction;
    #color;

    /**
     * @constructor
     * @description Stores the parameters into the variables within this class as well as
     * getting a random color upon initialization.
     * @param {Int} radius 
     * @param {Int} degree 
     * @param {Boolean} direction 
     */
    constructor(radius, degree, direction) {
        this.#x = 0;
        this.#y = 0;
        this.#radius = radius;
        this.#degree = degree;
        this.#direction = direction;
        this.getRandomColor();
    }

    /**
     * @method
     * @description Gets the new degree of the circle. This determines the direction in
     * which the circle will appear to be traveling. Once the value is above or below
     * the amount of degrees a circle can have, addition or subtract of 360 is done. This
     * is because the speed of the circle affects the location of the circle.
     */
    calculateNewDegree() {
        this.#degree += (this.#direction ? adjustValue : -1 * adjustValue);

        if(this.#direction && this.#degree > 360)
            this.#degree -= 360;
        else if(!this.#direction && this.#degree < 0)
            this.#degree += 360;
    }

    /**
     * @method
     * @description Gets a new Random 6-Hex code color used for filling the circle.
     */
    getRandomColor() {
        this.#color = "#";

        for(let i = 0; i < 3; i++) {
            let colorPicker = Math.floor(Math.random() * 255);
            let convert = colorPicker.toString(16);

            this.#color += convert;
        }
    }

    /**
     * @method
     * @description Sets the new X / Y position of the circle to be drawn at. This intakes an array length of 2,
     * one for X and for Y. The value is stored within this class.
     * @param {Int Array} newCoords - Array containing X/Y coordinates.
     */
    changeXY(newCoords) {
        this.#x = newCoords[0];
        this.#y = newCoords[1];
    }

    // Getters for calculating new positions
    getDegree() { return this.#degree; }
    getRadius() { return this.#radius; }

    /**
     * Called during the draw() method of P5js. This fills the circle with the corresponding color
     * and draws the cirlce of 15 pixels at the location.
     */
    display() {
        fill(this.#color);
        circle(this.#x, this.#y, 15);
    }
}

/**
 * @class PointPosition
 * @description Simple class containing a method for calculating new values.
 */
class PointPosition {

    // Generic Empty constructor
    constructor() { }

    /**
     * @method
     * @description Calculates the X and Y point on a circle. The radius and degree provided determine the
     * location of the X/Y position. To avoid exceptions, the radius needs to be positive and the degree
     * must be a value between 0 - 360 (inclusive).
     * @param {Int} radius - Radius of the circle
     * @param {Int} degree - Degree of what point on the circle to calculate
     * @returns Int Array [2] - X and Y coordinates for the circle.
     */
    calculateNewCoordinates(radius, degree) {
        let ret = [0, 0];

        ret[0] = mouseX + (Math.round((radius * Math.sin(Math.PI * 2 * degree / 360)) * 100) / 100);
        ret[1] = mouseY + (Math.round((radius * Math.cos(Math.PI * 2 * degree / 360)) * 100) / 100);

        return ret;
    }
}