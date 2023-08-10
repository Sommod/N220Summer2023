/*
 * Name: Josh Moore
 * Assignment: Final Project
 * Date: 09 August 2023
 * Description: Using the knowledge and information from this course, create an application using
 *              the principles learned.
 * Log:
 * - 09 August 2023: Completed the Final Assignment
 */
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
    pp = new PointPosition();
    adjustValue = 3;

    changeAuto = false;
    speeder = 30;
    timer = 0;

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

    for(let i of cb) {
        i.calculateNewDegree();
        i.changeXY(pp.calculateNewCoordinates(i.getRadius(), i.getDegree()));
        i.display();
    }

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

function changeColorAutomatically() {
    for(let i of cb)
        i.getRandomColor();
}

function changeAutoColorSpeed(direction) {
    speeder += (direction ? 1 : -1);
}

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
    console.log(cb.length);
}

function mouseClicked() {
    for(let i of cb) {
        i.getRandomColor();
    }
}

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

class CircleObject {
    #x;
    #y;
    #radius;
    #degree
    #direction;
    #color;

    constructor(radius, degree, direction) {
        this.#x = 0;
        this.#y = 0;
        this.#radius = radius;
        this.#degree = degree;
        this.#direction = direction;
        this.getRandomColor();
    }

    calculateNewDegree() {
        this.#degree += (this.#direction ? adjustValue : -1 * adjustValue);

        if(this.#direction && this.#degree > 360)
            this.#degree -= 360;
        else if(!this.#direction && this.#degree < 0)
            this.#degree += 360;
    }

    getRandomColor() {
        this.#color = "#";

        for(let i = 0; i < 3; i++) {
            let colorPicker = Math.floor(Math.random() * 255);
            let convert = colorPicker.toString(16);

            this.#color += convert;
        }
    }

    changeColor(newColor) {
        this.#color = newColor;
    }

    changeXY(newCoords) {
        this.#x = newCoords[0];
        this.#y = newCoords[1];
    }

    getDegree() { return this.#degree; }
    getRadius() { return this.#radius; }

    display() {
        fill(this.#color);
        circle(this.#x, this.#y, 15);
    }
}

class PointPosition {

    constructor() { }

    calculateNewCoordinates(radius, degree) {
        let ret = [0, 0];

        ret[0] = mouseX + (Math.round((radius * Math.sin(Math.PI * 2 * degree / 360)) * 100) / 100);
        ret[1] = mouseY + (Math.round((radius * Math.cos(Math.PI * 2 * degree / 360)) * 100) / 100);

        return ret;
    }
}