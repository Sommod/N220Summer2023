/*
 * Name: Josh Moore
 * Assignment: Color Changer
 * Date: 4 August 2023
 * Description: Using custom attributes, create three divs dynamically and have them change colors when clicked.
 * Log:
 * - 4 August 2023: Completed Color Changer Assignment
 */

function changeColor(tag) {
    tag.target.style.backgroundColor = tag.target.getAttribute("data-color");
}

function createDivs() {
    for(let i = 0 ; i < 3; i++) {
        let element = document.createElement("div");

        element.style.backgroundColor = "Gray";
        element.style.height = "200px";
        element.style.width = "200px";
        element.style.float = "left";
        element.style.margin = "5px";
        element.setAttribute("data-color", setColor(i));

        element.addEventListener("click", changeColor);
        document.body.appendChild(element);
    }
}

function setColor(num) {
    switch(num) {
        case 0:
            return "#FF0000";
        case 1:
            return "#00FF00";
        case 2:
            return "#0000FF";
    }
}

createDivs();