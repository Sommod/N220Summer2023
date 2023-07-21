/*
 * Name: Josh Moore
 * Assignment: Midterm
 * Date: 21 July 2023
 * Description: Recreate Space Invaders for Midterm
 * Log:
 * - 21 July 2023 (5:13): Started assignment
 * - 21 July 2023 (6:07): completed creating all the invaders and the rows they exist on.
 * - 21 July 2023 (6:21): Finished drawing Player.
 * - 21 July 2023 (6:37): Finished player movement and ability to shoot bullet.
 * - 21 July 2023 (6:50): Finished bullet movement.
 * - 21 July 2023 (7:13): Finished bullet collision of invaders, removal of invaders.
 * - 21 July 2023 (7:16): Finished handling scoreboard and displaying.
 * - 21 July 2023 (7:36): Finished invader movement
 */

// Variables
let invader = [];
let you;
let bullets = [];
let invaderMover;

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 600);
    // invader[0] = new alien(40, 40);
    // invader[1] = new alien(invader[0].getX() + 100, invader[0].getY());
    // invader[2] = new alien(invader[1].getX() + 100, invader[0].getY());

    createInvaders();
    you = new player();
    invaderMover = new invaderMovementHandler();
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    background("#000000");

    you.display();

    for(let i in invader) {
        if(invader[i].isAlive())
            invader[i].display();
        else {
            if(invader[i].getCount() > 0)
                invader[i].explode();
        }
    }

    // check if player is alive.
    if(you.isAlive()) {
        if(keyIsDown(37) || keyIsDown(65)) {
            you.move(-2);
        } else if(keyIsDown(39) || keyIsDown(68)) {
            you.move(2);
        }
    }
    
    // Move Bullet
    for(let i in bullets) {
        bullets[i].display();
        bullets[i].move();
    }

    bulletHit();

    // Remove oldest bullet
    if(bullets.length != 0) {
        if(bullets[0].getY() == 0)
            bullets.shift();
    }

    // Handler for .5 seconds on each shot allowed.
    you.count();
    updateScore();
    invaderMover.move();
}

function updateScore() {
    let showcase = document.getElementById("showcase");
    showcase.innerText = "Score: " + you.getScore();
}

function keyReleased() {
    if(keyCode === 32) {
        you.shoot();
    }

    return false;
}

// Handles moving the invaders
class invaderMovementHandler {
    #counter;
    #speed;
    #direction;

    constructor() {
        this.#counter = 10;
        this.#speed = 2;
        this.#direction = true;
    }

    #upSpeed(value) { this.#speed += value; }
    #swapDirection() { this.#direction = !this.#direction; }

    move() {
        if(this.#counter <= 0) {
            if(this.#direction) { // Right
                if(invader[0].getX() >= 120) { // Move down when at edge
                    this.#swapDirection();
                    this.#upSpeed(0.05);
                    this.#counter = 20;

                    for(let i = 0; i < invader.length; i++) {
                        invader[i].setNewCoordinates(invader[i].getX(), invader[i].getY() + 15);
                    }
                } else { // Normal Movement
                    for(let i = 0; i < invader.length; i++) {
                        invader[i].setNewCoordinates(invader[i].getX() + this.#speed, invader[i].getY());
                    }
                }
            } else { // Left
                if(invader[0].getX() <= 40) { // Move down when at edge
                    this.#swapDirection();
                    this.#upSpeed(0.05);
                    this.#counter = 20;

                    for(let i = 0; i < invader.length; i++) {
                        invader[i].setNewCoordinates(invader[i].getX(), invader[i].getY() + 15);
                    }
                } else { // Normal Movement
                    for(let i = 0; i < invader.length; i++) {
                        invader[i].setNewCoordinates(invader[i].getX() - this.#speed, invader[i].getY());
                    }
                }
            }
        } else
            this.#counter--;
    }
}

// Creates invaders
function createInvaders() {
    invader[0] = new alien(40, 40);

    for(let row = 0, num = 1; row < 3; row++) {
        for(let col = 1; col < 8; col++, num++) {
            invader[num] = new alien(invader[calcEleLocation(num)].getX() + (calcEleLocation(num) == 0 ? 0 : 100), invader[calcEleLocation(num)].getY() + (row * 80));
        }
    }

    invader.shift();
}

// Checking collison for bullets
function bulletHit() {
    for(let i = 0; i < invader.length; i++) {
        for(let j = 0; j < bullets.length; j++) {
            if((bullets[j].getX() >= invader[i].getX() - 30 && bullets[j].getX() <= invader[i].getX() + 60)
            && (bullets[j].getY() - 15 >= invader[i].getY() - 20 && bullets[j].getY() - 15 <= invader[i].getY() + 50)
            && invader[i].isAlive()) {
                bullets.splice(j, 1);
                invader[i].setDead();
                you.addToScore();
            }
        }
    }
}

function calcEleLocation(num) {
    return ((num - 1) % 7);
}

// Class Bullet
class bullet {
    #x;
    #y;

    constructor(youX, youY) {
        this.#x = youX;
        this.#y = youY;
    }

    getX() { return this.#x; }
    getY() { return this.#y; }

    move() {
        this.#y -= 10;
    }

    display() {
        fill("#00FF00");
        rect(this.#x, this.#y, 10, -15, 0, 0, 5, 5);
    }
}

// Class Player
class player {
    #x;
    #y;
    #alive;
    #counter;
    #score;

    constructor() {
        this.#x = 300;
        this.#y = 500;
        this.#alive = true;
        this.#score = 0;
        this.#counter = 0;
    }

    getX() { return this.#x; }
    getY() { return this.#y; }
    isAlive() { return this.#alive; }
    setDead() { this.#alive = false; }
    addToScore() { this.#score++; }
    getScore() { return this.#score; }

    shoot() {
        if(this.#counter == 0) {
            bullets[bullets.length] = new bullet(this.#x + 35, this.#y - 20);
            this.#counter = 30;
        }
    }

    move(xValue) {
        this.#x += xValue;
    }

    count() {
        if(this.#counter > 0)
            this.#counter--;
    }

    display() {
        fill("#00FF00");
        rect(this.#x, this.#y, 80, 40, 5, 5, 0, 0);
        rect(this.#x + 35, this.#y - 15, 10, 15, 8, 8, 0);
    }
}

// Class Alien
class alien {
    #x;
    #y;
    #alive;
    #explode;
    #count;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        this.#alive = true;
        this.#explode = false;
        this.#count = 10;
    }

    getX() { return this.#x; }

    getY() { return this.#y; }

    isAlive() { return this.#alive; }

    setDead() { this.#alive = false; }

    getCount() { return this.#count; }

    setNewCoordinates(x, y) {
        this.#x = x;
        this.#y = y;
    }

    explode() {
        fill("#FFFFFF");
        stroke(255);
        strokeWeight(5);
        line(this.#x, this.#y, this.#x + 15, this.#y + 20);
        line(this.#x + 40, this.#y, this.#x + 25, this.#y + 20);
        line(this.#x, this.#y + 45, this.#x + 15, this.#y + 25);
        line(this.#x + 40, this.#y + 45, this.#x + 25, this.#y + 25);

        this.#count--;
    }

    display() {
        noStroke();
        fill("#FFFFFF");
        rect(this.#x, this.#y, 30, 30);

        fill("#000000");
        rect(this.#x + 5, this.#y + 5, 5, 5);
        rect(this.#x + 20, this.#y + 5, 5, 5);

        fill("#FFFFFF");
        rect(this.#x + 2, this.#y - 10, 10, 10);
        rect(this.#x + 18, this.#y - 10, 10, 10);

        rect(this.#x - 8, this.#y - 20, 10, 10);
        rect(this.#x + 28, this.#y - 20, 10, 10);

        rect(this.#x - 10, this.#y, 10, 40);
        rect(this.#x + 30, this.#y, 10, 40);

        rect(this.#x, this.#y + 40, 13, 10);
        rect(this.#x + 18, this.#y + 40, 13, 10);

        rect(this.#x - 20, this.#y + 10, 10, 20);
        rect(this.#x + 40, this.#y + 10, 10, 20);

        rect(this.#x - 30, this.#y + 20, 10, 20);
        rect(this.#x + 50, this.#y + 20, 10, 20);
    }
}