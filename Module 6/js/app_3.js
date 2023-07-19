/*
 * Name: Josh Moore
 * Assignment: Animated Objects
 * Date: 18 July 2023
 * Description: Create multiple objects that move every frame of p5.
 * Log:
 * - 18 July 2023: Completed Animated Objects assignments.
 * - 18 July 2023: Couldn't get pattern correct to desire. Compromised to having current animation.
 * - 18 July 2023: Finished animation with desired effect of circle.
 */

// Variables
let angle = [0, 90, 180, 270];
let angle2 = [270, 180, 90, 0];
let circleArray = [];
let circleArray2 = [];


/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 600);

    for(let i = 0; i < 10; i++) {
        circleArray[i] = new Obj((20 * (i + 1)), i % 4, angle[i % 4], getRandomColor());
        circleArray2[i] = new Obj((20 * (i + 1)), (i + 1) % 4, angle2[i % 4], getRandomColor());
    }
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    background("#547888");
    //let getCalc = calc(40, leftDegree);
    //let get2Calc = calc(20, rightDegree);

    //circle(getCalc[0] + 370, getCalc[1] + 300, 15);
    //circle(get2Calc[0] + 370, get2Calc[1] + 300, 15);

    // for(let a = 0; a < angle.length; a++) {
    //     if((a + 1) % 2 != 0) {
    //         angle[a] += 1;

    //         if(angle[a] >= 360)
    //             angle[a] = 0;
    //     } else {
    //         angle[a] -= 1;

    //         if(angle[a] <= 0)
    //             angle[a] = 360;
    //     }
    // }

    /**
     * Changes the angle value every frame.
     */
    angle[0] += 1;
    angle[1] -= 1;
    angle[2] -= 1;
    angle[3] += 1;

    angle2[0] -= 1;
    angle2[1] += 1;
    angle2[2] += 1;
    angle2[3] -= 1;

    /**
     * If the angle (depending on increase or decrease) reacher 0 or 360
     * Then this will reset the value back to the opposing value base on
     * the angle of a circle.
     */
    if(angle[0] >= 360)
        angle[0] = 0;
    if(angle[1] <= 0)
        angle[1] = 360;
    if(angle[2] <= 0)
        angle[2] = 360;
    if(angle[3] >= 360)
        angle[3] = 0;

    if(angle2[0] >= 360)
        angle[0] = 0;
    if(angle2[1] <= 0)
        angle[1] = 360;
    if(angle2[2] <= 0)
        angle[2] = 360;
    if(angle2[3] >= 360)
        angle[3] = 0;

    // for(let cir of circleArray) {
    //     //console.log(`${angle[0]} ${angle[1]} ${angle[2]} ${angle[3]}`)
    //     cir.calcNewCoords(angle[cir.getDirection()]);
    //     circle(cir.getX(), cir.getY(), 15);
    // }

    /**
     * Calculates the new X,Y coordinate for the circle and redraws it on the canvas.
     */
    for(let i = 0, z = 0; i < 10; i++, z++) {
        circleArray[i].calcNewCoords(angle[circleArray[i].getDirection()]);
        circleArray2[i].calcNewCoords(angle2[circleArray2[i].getDirection()]);
        fill("#" + circleArray[i].getColor());
        circle(circleArray[i].getX(), circleArray[i].getY(), 15);
        fill("#" + circleArray2[i].getColor());
        circle(circleArray2[i].getX(), circleArray2[i].getY(), 15);
    }
}

/**
 * @method getRandomColor
 * @description Gets a set of random numbers from 0 - 255. The number is then converted into
 * Hex and then returned.
 * @returns String - the 6 character Hex identifier to getting a random color.
 */
function getRandomColor() {

    // Variables
    let colorPicker = 0;
    let ret = "";

    // Runs through a loop 3 times. Each time is getting a value from 0 - 255.
    // The value is then converted into Hex using a toString method and stored
    // into the return value.
    for(let i = 0; i < 3; i++) {
        colorPicker = Math.floor(Math.random() * 255);
        let convert = colorPicker.toString(16);

        ret += convert;
    }

    return ret;
}

/**
 * @function calc
 * @description Uses Sin/Cos to get an X/Y point on a circle based on a formula.
 * @param {int} radius - radius of the circle the Drawn Circle is orbiting.
 * @param {int} degree - the angle of the circle
 * @returns Array - two length array containing new X/Y points on circle.
 */
function calc(radius, degree) {
    let ret = [];
    ret[0] = Math.round((radius * Math.sin(Math.PI * 2 * degree / 360)) * 100) / 100;
    ret[1] = Math.round((radius * Math.cos(Math.PI * 2 * degree / 360)) * 100) / 100;

    return ret;
}

/**
 * @class Obj
 * @classdesc Contains the X, Y, and radius of the circle the object is orbiting on.
 */
class Obj {
    #x;
    #y;
    #radius;
    #direction;
    #color;

    /**
     * 
     * @param {int} radius - Radius of circle
     * @param {int} direction - which of the four starting point numbers to use.
     * @param {int} degree - current starting number to calculate starting X/Y points.
     */
    constructor(radius, direction, degree, color) {
        this.#direction = direction;
        this.#radius = radius;
        this.#color = color;
        
        let grabber = calc(this.#radius, degree);

        this.#x = grabber[0] + 370;
        this.#y = grabber[1] + 300;
    }

    /**
     * @method getColor
     * @description Gets the stored color code of this object.
     * @returns String - Hex value of Color
     */
    getColor() { return this.#color; }

    /**
     * @method getX
     * @description Gets the current X-Coordinate of this circle's object.
     * @returns Float - X-Coordinate of drawn circle.
     */
    getX() { return this.#x; }

    /**
     * @method getY
     * @description Gets the current Y-Coordinate for this Circle's Object.
     * @returns Float- Y-Coordinate of the drawn circle.
     */
    getY() { return this.#y; }

    /**
     * @method getDirection
     * @description Gets the numerical value that is used for getting the numerical value from
     * the Angle array.
     * @returns Int - Numerical value for getting angle array element.
     */
    getDirection() { return this.#direction; }

    /**
     * @method calcNewCoords
     * @description Sets the X/Y value to the new calculated coordinates.
     * @param {int} degree - current angle to use for calculations
     */
    calcNewCoords(degree) {
        let grabber = calc(this.#radius, degree);

        this.#x = grabber[0] + 370;
        this.#y = grabber[1] + 300;
    }
}