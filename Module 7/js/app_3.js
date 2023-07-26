/*
 * Name: Josh Moore
 * Assignment: Number Guesser (Harder)
 * Date: 25 July 2023
 * Description: Using a random number generator. Create a number and have the user guess until the correct number.
 * Log:
 * - 25 July 2023: Completed Guesser game.
 */

// Variables
let hidden;

/**
 * @function generateNumber
 * @description Generates a random number from 1 - 20, stores the number in the 'hidden' variable and sets the
 * Div tag with text.
 */
function generateNumber() {
    hidden = Math.floor(Math.random() * 20 + 1);
    changeDisplay("I've got a number from 1 - 20, can you guess it?");

    console.log(`For Debugging Purposes, value is: ${hidden}`);
}

/**
 * @function guess
 * @description Intakes the number of the given user and compares the value to the hidden value. Displays
 * information about the hidden depending on the users' answer.
 * 
 * @param {Number} value - Integer of user guess
 */
function guess(value) {
    if(value == hidden) {
        changeDisplay(`Correct! The answer is ${hidden}.`);
        waitForTimer(3, true);
    } else if(value < hidden) {
        changeDisplay("Not quite, you're number is too low.");
        waitForTimer(2, false);
    } else {
        changeDisplay("Too far! You're number is too big.");
        waitForTimer(2, false);
    }
}

/**
 * @function
 * @description Intakes a String object and uses it to set the Div tag's text.
 * @param {String} newText - Text to set to the Display tag.
 */
function changeDisplay(newText) {
    document.getElementById("display").innerHTML = newText;
}

/**
 * @function waitForTimer
 * @description Used for making the JS code 'wait' X seconds before performing the next set of code.
 * @param {Number} time - Time in seconds to wait
 * @param {Boolean} restart - Determine whether to restart game or not.
 */
function waitForTimer(time, restart) {
    setTimeout(() => {
        if(restart)
            generateNumber();
        else
            changeDisplay("What's my Number?");
    }, (time * 1000));
}

generateNumber();