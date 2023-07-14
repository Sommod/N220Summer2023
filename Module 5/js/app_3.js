/*
 * Name: Josh Moore
 * Assignment: DOM Manipulation
 * Date: 14 July 2023
 * Description: Change the color of the Div when the mouse is over and leaving the Div. 
 * Log:
 * - 14 July 2023: Completed task 3 of changing Div color based on mouse location.
 */

/**
 * @method mouseOverColor
 * @description Changes the color of the Div tag when the mouse enters the Div tag. The color is changed to 'Black' (000000)
 */
function mouseOverColor() {
    let element = document.getElementById("square");

    element.style.backgroundColor = "#000000";
}

/**
 * @method mouseOutColor
 * @description Changes the color of the Div tag when the mouse exits the Div. The color is changed to 'Blue' (0000FF)
 */
function mouseOutColor() {
    let element = document.getElementById("square");

    element.style.backgroundColor = "#0000FF";
}

/**
 * @method preset
 * @description Sets the Div to the corresponding preset values on the HTML page.
 */
function preset() {
    let element = document.getElementById("square");

    element.style.width = "100px";
    element.style.height = "100px";
    element.style.backgroundColor = "#0000FF";
}

preset();