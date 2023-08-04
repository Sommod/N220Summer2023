/*
 * Name: Josh Moore
 * Assignment: Bad Word Catcher
 * Date: 4 August 2023
 * Description: Using Arrays, check if the user-inputted values have any prohibited words
 * Log:
 * - 4 August 2023: Completed Bad Words Assignment
 */

// Variables
let array;

/**
 * @function check
 * @description Gets the user inputted text field and splits the string into an array. Checks each word
 * if it matches to a prohibited word and counts them. Displays if found and the amount.
 */
function check() {
    array = document.getElementById("input").value.split(" ");

    let count = 0;

    for(let i of array) {
        switch(i.toUpperCase()) {
            case "CLEAR":
            case "WATER":
            case "TIRES":
                count++;
                break;
        }
    }

    document.getElementById("display").innerHTML = (count > 0 ? "Bad words found! Amount: " + count + "<br/>Text: " + document.getElementById("input").value : "No bad words were found.");
    document.getElementById("input").value = "";
}