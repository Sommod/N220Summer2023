/*
 * Name: Josh Moore
 * Assignment: Distance Calculator
 * Date: 25 July 2023
 * Description: Calculates the distance of two points using their X/Y values.
 * Log:
 * - 25 July 2023: Complete Distance Calculator.
 */

/**
 * @function onDisplay
 * @description Gets the value of the distance between the two points and displays the answer to the 'display' div tag.
 */
function onDisplay() {

    let distance = onCalc(document.getElementById("x1").value, document.getElementById("y1").value, document.getElementById("x2").value, document.getElementById("y2").value);

    document.getElementById("display").innerHTML = `The distance is: ${distance.toFixed(2)}.`
}

/**
 * @function onCalc
 * @description Calculates the distance of two different points based on the given numbers.
 * 
 * @param {Number} x1  - First X point
 * @param {Number} y1  - First Y point
 * @param {Number} x2  - Second X point
 * @param {Number} y2  - Second Y point
 * @returns 
 */
function onCalc(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}