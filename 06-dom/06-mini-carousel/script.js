/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        var gallery = [
            "../../_shared/img/bell.svg",
            "../../_shared/img/clock.svg",
            "../../_shared/img/compass.svg",
            "../../_shared/img/lemon.svg",
            "../../_shared/img/map.svg",
        ];
var counter = 1;

    next.onclick = function () {
        if (counter == 1) {
            document.querySelector("img").src = gallery[1];
            counter++;
        }
        else if (counter == 2) {
            document.querySelector("img").src = gallery[2];
            counter++;
        }
        else if (counter == 3) {
            document.querySelector("img").src = gallery[3];
            counter++;
        }
        else if (counter == 4) {
            document.querySelector("img").src = gallery[4];
            counter++;
        }
        else if (counter == 5) {
            document.querySelector("img").src = gallery[0];
            counter = 1;
        }
    }
})();
