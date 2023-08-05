/*
 * Name: Josh Moore
 * Assignment: Color Mixer
 * Date: 4 August 2023
 * Description: Using Buttons and Events to change the color of a div from user inputs.
 * Log:
 * - 4 August 2023: Completed Color Mixer assignment
 */

// Variables
let element;
let labelEl;
let rgb = [0,0,0];

function createDiv() {
    let ele = document.createElement('div');
    ele.style.width = "400px";
    ele.style.height = "200px";
    ele.style.backgroundColor = "#000000";
    ele.id = "display";

    document.body.appendChild(ele);

    ele = document.createElement("br");
    document.body.appendChild(ele);
    
    ele = document.createElement("label");
    ele.innerHTML = "Current Color: RGB (0, 0, 0)";
    ele.id = "labelEl";
    document.body.appendChild(ele);

    ele = document.createElement("br");
    document.body.appendChild(ele);

    labelEl = document.getElementById("labelEl");
    element = document.getElementById("display");
}

function createButtons() {
    for(let i = 0; i < 9; i++) {
        if(i % 3 == 0) {
            if(i % 3 == 0 && i != 0)
                document.body.appendChild(document.createElement("br"));
            
                let label = document.createElement("label");
            label.innerHTML = setText(i, true);

            document.body.appendChild(label);
        }

        let btn = document.createElement("button");

        btn.innerHTML = setText(i, false);
        btn.id = i;
        btn.setAttribute("data-number", setNumber(i));
        btn.setAttribute("onclick", `changeColor(${i})`);
        btn.setAttribute("type", "button");
        
        document.body.appendChild(btn);
    }

    element = document.getElementById("display");
}

function setText(num, which) {

    if(which) {
        if(num % 3 == 0) {
            switch(num / 3) {
                case 0:
                    return "Red: ";
                case 1:
                    return "Green: ";
                case 2:
                    return "Blue: ";
            }
        }
    }

    switch(num % 3) {
        case 0:
            return " +1 ";
        case 1:
            return " +5 ";
        case 2:
            return " +10 "
    }
}

function setNumber(num) {
    switch(num % 3) {
        case 0:
            return 1;
        case 1:
            return 5;
        case 2:
            return 10;
    }
}

function changeColor(btnId) {
    let btn = document.getElementById(btnId);
    let inc = Number(btn.getAttribute("data-number"));
    let whichColor = getButtonId(btn);

    rgb[whichColor] = (inc + rgb[whichColor] <= 255) ? (inc + rgb[whichColor]) : 255;
    console.log(asString());
    element.style.backgroundColor = "#" + asString();

    console.log(element);
}

function asString() {
    //return rgb[0].toString() + "" + rgb[1].toString() + "" + rgb[2].toString();
    let ret = "";

    if(rgb[0] < 10)
        ret += "0" + rgb[0];
    else
        ret += rgb[0].toString(16);

       if(rgb[1] < 10)
        ret += "0" + rgb[1];
    else
        ret += rgb[1].toString(16);

    if(rgb[2] < 10)
        ret += "0" + rgb[2];
    else
        ret += rgb[2].toString(16);
    
    return ret;
}

function getButtonId(btn) {
    switch(Number(btn.id)) {
        case 0:
        case 1:
        case 2:
            return 0;
        case 3:
        case 4:
        case 5:
            return 1;
        case 6:
        case 7:
        case 8:
            return 2;
    }
}

createDiv();
createButtons();