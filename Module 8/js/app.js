/*
 * Name: Josh Moore
 * Assignment: Is Divisible by 7
 * Date: 28 July 2023
 * Description: Create an application to calculate whether the inputted number is divisible by 7.
 * Log:
 * - 28 July 2023: Completed Assignment
 */

function onCheck(value) {
    document.getElementById("display").innerHTML = onCalc(value) ? "The number " + value + " is divisble by 7." : "This number, " + value + " is not divisible by 7."
}

function onCalc(value) {
    return value % 7 == 0 && value != 0;
}