/*
 * Name: Josh Moore
 * Assignment: Make divs
 * Date: 4 August 2023
 * Description: Using a given array, create the given divs dynamically.
 * Log:
 * - 4 August 2023: Completed Make Divs Assignment.
 */

// Variables
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#FF0000", height: 300, width: 100 },   
];

/**
 * @function createDivs
 * @description Using the given array of objects above, create all the divs dynamically
 * with the given values and display them onto the HTML page.
 */
function createDivs() {
    for(let obj of objects) {
        let newElement = document.createElement("div");
        newElement.style.backgroundColor = obj.color;
        newElement.style.height = obj.height + "px";
        newElement.style.width = obj.width + "px";

        document.body.appendChild(newElement);
    }
}

// Runs the function for creating the divs.
createDivs();