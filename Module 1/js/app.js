/*
 * Name: Josh Moore
 * Assignment: Personal Composition
 * Date: 06 June 2023
 * Description: Create a simple decorative picture
 * Log:
 * - 06 June 2023:
 *      Added Circle, Rect, Fill, and Stroke methods to create minimal shapes
 *      Added Background method to darken the white background
 */

/**
 * @method setup
 * @description Creates a canvas of default 800px by 600px.
 */
function setup() {
    // Creates a Canvas at the top-left portion of browser
    // Dimensions: 800px - 600px
    createCanvas(800, 600);
}

/**
 * @method draw
 * @description Function used for using different P5 methods for creating abstract drawings using JS.
 */
function draw() {
    // Variables
    var backgroundColor = "#156B54";
    var hexRedColor = "#FF0000"

    // Set background color to a green-ish blue. Easier on the late owl eyes.
    background(backgroundColor);

    // Create a Green-ish stroke (outline) with weight of 10
    stroke("#568333");
    strokeWeight(10)

    // Create a red-filled circle with a radius of 50.
    fill(hexRedColor);
    circle(100, 100, 50);
}