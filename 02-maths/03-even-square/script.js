/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var i=1;
    document.getElementById("run").addEventListener("click", function() {
        while (i < 22) {
            alert("The square of " + i + " is " + i*i);
            i++;
        }
    });
})();
