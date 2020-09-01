/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById("pass-one").onkeypress = function (){
    var pasw = document.getElementById("pass-one").value;
    var pasreq = /^(?=.*\d){2,}.{8,}$/;
    if (pasw.match(pasreq)) {
        document.getElementById("validity").innerHTML = "Ok";
    }
    }
})();
