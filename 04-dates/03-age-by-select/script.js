/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("button").onclick = function(event) {
        let today = new Date();
        let nowday = document.getElementById("dob-day").value;
        let nowmonth = document.getElementById("dob-month").value;
        let nowyear = document.getElementById("dob-year").value;
        let age = today.getFullYear() - nowyear;
        let m = today.getMonth() - (nowmonth - 1);

        if (m < 0 || (m === 0 && today.getDate() < nowday)) {
            age = age - 1;
        }
        alert("You are " + age + " and born on " + nowday + "/"+ nowmonth + "/"+ nowyear);
    }
})();
