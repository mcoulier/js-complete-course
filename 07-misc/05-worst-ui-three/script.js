/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let newNumber = document.getElementById("target")

    document.getElementById("fix-part-one").addEventListener("click", function(){
        let number1 = document.getElementById("part-one").value = "0" + Math.floor(Math.random()*(499-460)+460);
        newNumber.innerHTML = number1;
    });

    document.getElementById("fix-part-two").addEventListener("click", function(){
            let number2 = document.getElementById("part-two").value = Math.floor(Math.random()*99);
            newNumber.innerHTML += number2;
    });

    document.getElementById("fix-part-three").addEventListener("click", function(){
        let number3 = document.getElementById("part-three").value = Math.floor(Math.random()*99);
        newNumber.innerHTML += number3;

    });
    document.getElementById("fix-part-four").addEventListener("click", function(){
        let number4 = document.getElementById("part-four").value = Math.floor(Math.random()*99);
        newNumber.innerHTML += number4;
    });

})();