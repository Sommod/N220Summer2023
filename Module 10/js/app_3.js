/*
 * Name: Josh Moore
 * Assignment: Flash Cards
 * Date: 4 August 2023
 * Description: Using Custom Attributes on Buttons, have flash cards with answers.
 * Log:
 * - 4 August 2023: Completed assignment Flash Cards
 */

function createItems() {
    let element = document.createElement("div");

    element.style.height = "200px";
    element.style.width = "200px";
    element.style.backgroundColor = "#547888";
    element.id = "display_1";
    element.style.float = "left";
    element.style.margin = "1px";
    element.innerHTML = "What language is this program written in?"
    element.setAttribute("data-answer", "JavaScript");
    element.addEventListener("click", displayAnswer);
    document.body.appendChild(element);

    element = document.createElement("div");
    element.style.height = "200px";
    element.style.width = "200px";
    element.style.backgroundColor = "#547888";
    element.id = "display_2";
    element.style.float = "left";
    element.style.margin = "1px";
    element.innerHTML = "What is the name of the class this was for?"
    element.setAttribute("data-answer", "N220, Summer of 2023");
    element.addEventListener("click", displayAnswer);
    document.body.appendChild(element);

    element = document.createElement("div");
    element.style.height = "200px";
    element.style.width = "200px";
    element.style.backgroundColor = "#547888";
    element.id = "display_3";
    element.style.float = "left";
    element.style.margin = "1px";
    element.innerHTML = "What is the name of the College?"
    element.setAttribute("data-answer", "IUPUI");
    element.addEventListener("click", displayAnswer);
    document.body.appendChild(element);
}

function displayAnswer(event) {
    event.target.innerHTML = event.target.getAttribute("data-answer");
}

createItems();