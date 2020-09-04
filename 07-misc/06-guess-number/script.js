/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let pickNumber = Math.floor((Math.random() * 100) + 1);
    console.log(pickNumber);
    let numberofGuesses = 1

    while (true){
        let guessNumber = prompt("Guess the number between 1-100:")
        if (guessNumber>pickNumber){
            alert("Guess lower.");
            numberofGuesses++
        }
        else if (guessNumber<pickNumber){
            alert("Guess higher.")
            numberofGuesses++
        }
        else {
            alert("That's it! You needed " + numberofGuesses + " guesses.")
        }
    }


})();
