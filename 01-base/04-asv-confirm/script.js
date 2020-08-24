/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    while (true) {

        var age = window.prompt("How old are you?");
        var gender = window.prompt("What's your gender?");
        var town = window.prompt("What town do you live in?");

        alert("So you are " + age + " years old. You are " + gender + " and you come from " + town);
        var x = window.prompt("Is this information correct? (type yes)");
        if (x == "yes") {
            break;
        }
    }
}())