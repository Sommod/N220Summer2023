/*
 * Name: Josh Moore
 * Assignment: Password protected
 * Date: 25 July 2023
 * Description: Createa an application that intakes two inputs to check for Username and Password.
 * Log:
 * - 25 July 2023: Completed assignment for password protected.
 */

/**
 * @function onCheck
 * @description Intakes two values from the HTMl input and checks if the values
 * given are the correct Username and Password.
 * 
 * @param {String} username - Username of account
 * @param {String} password - Password of account
 */
function onCheck(username, password) {
    if(username == "Username" && password == "Password")
        document.getElementById("display").innerHTML = "Success! You are logged in.";
    else
        document.getElementById("display").innerHTML = "Sorry, wrong information.";
}