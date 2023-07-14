/*
 * Name: Josh Moore
 * Assignment: DOM Manipulation
 * Date: 13 July 2023
 * Description: Using JS, create 100 Div squares on the main page.  
 * Log:
 * - 13 July 2023: Started Task of creating Div's dymanically
 * - 14 July 2023: Fixed error of null properties. Finished assignment
 */

/**
 * @method addDivs
 * @description Runs through a loop to create 100 Div tags and add them to the HTML page.
 */
function addDivs() {
    for(let i = 0; i < 100; i++) {
        let element = document.createElement("div");
        
        element.id = "" + i;
        element.style.width = "20px";
        element.style.height = "20px";
        element.style.backgroundColor = "#" + getRandomColor();
        element.style.float = "left";
        element.style.margin = "1px";
        document.body.appendChild(element);
    }
}

/**
 * @method getRandomColor
 * @description Gets a set of random numbers from 0 - 255. The number is then converted into
 * Hex and then returned.
 * @returns String - the 6 character Hex identifier to getting a random color.
 */
function getRandomColor() {

    // Variables
    let colorPicker = 0;
    let ret = "";

    // Runs through a loop 3 times. Each time is getting a value from 0 - 255.
    // The value is then converted into Hex using a toString method and stored
    // into the return value.
    for(let i = 0; i < 3; i++) {
        colorPicker = Math.floor(Math.random() * 255);
        let convert = colorPicker.toString(16);

        ret += convert;
    }

    return ret;
}

/**
 * @method recolor
 * @description Grabs each Div element in the HTML and changes it's color.
 */
function recolor() {
    for(let i = 0; i < 100; i++) {
        let element = document.getElementById(i);
        element.style.backgroundColor = "#" + getRandomColor();
    }
}

// Adds the Divs to the page with the preset styling.
addDivs();
