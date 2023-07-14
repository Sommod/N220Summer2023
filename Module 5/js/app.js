/*
 * Name: Josh Moore
 * Assignment: DOM Manipulation
 * Date: 12 July 2023
 * Description: Using the DOM, change the size of the Div tag on the HTML page.
 * Log:
 * - 12 July 2023: Completed Task 1 for changing size of Div.
 */

// Variables
var div = document.getElementById("square");
var size = [100, 100];

/**
 * @method preRun
 * @description Method ran on Script run. This sets the initial styling of the Div tag on the HTML page.
 */
function preRun() {
    div.style.backgroundColor = "#00AA00";
    div.style.width = size[0] + "px";
    div.style.height = size[1] + "px";
}

/**
 * @method increaseSize
 * @description Increases the size of the Div "square" on the HTML page every time it's clicked.
 * Size is increased by 10% every click.
 */
function increaseSize() {
    div.style.width = (size[0] *= 1.1) + "px";
    div.style.height = (size[1] *= 1.1) + "px";
}

/**
 * @method resetDiv
 * @description Resets the current stored values of the Div size to 100px and the div itself.
 */
function resetDiv() {
    div.style.width = "100px";
    div.style.height = "100px";

    size[0] = 100;
    size[1] = 100;
}

// Adds the style to the Div.
preRun();