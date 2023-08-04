/*
 * Name: Josh Moore
 * Assignment: It's Just Average
 * Date: 4 August 2023
 * Description: Have a user input a set of numbers and calculate them using an array.
 * Log:
 * - 4 August 2023: Completed Assignment Its Just Average
 */

// Variables
let array;

/**
 * @function calc
 * @description Gets the inputted values from the user, stores them within an array and loops through
 * to calculating the Sum and Average of all the numbers the user inputted.
 */
function calc() {
    let input = document.getElementById("text").value;
    array = [];
    
    for(let i = 0; i < input.split(",").length; i++) {
        array[i] = Number(input.split(",")[i]);
    }

    let sum = 0;
    for(let i of array) {
        sum += i;
    }

    document.getElementById("display").innerHTML = "Sum: " + sum + " | Average: " + (sum / array.length);
}