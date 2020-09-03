/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var partOne = 460;
    var partTwo = 0;
    var partThree = 0;
    var partFour = 0;
    var a = "0" + partTwo;
    var b = "0" + partThree;
    var c = "0" + partFour;
    target.innerHTML = "0" + partOne + a + b + c;

    document.getElementById('part-one').onclick = function () {
        if (partOne<499) {partOne++};
        target.innerHTML = "0" + partOne + a + b + c;
    }
    document.getElementById('part-two').onclick = function () {
        if (partTwo<99) {partTwo++};
        if (partTwo < 10) {
            a = "0" + partTwo
        } else {
            a = partTwo
        }
        ;
        target.innerHTML = "0" + partOne + a + b + c;
    }
    document.getElementById('part-three').onclick = function () {
        if (partThree<99) {partThree++};
        if (partThree < 10) {
            b = "0" + partThree
        } else {
            b = partThree
        }
        ;
        target.innerHTML = "0" + partOne + a + b + c;
    }
    document.getElementById('part-four').onclick = function () {
        if (partFour<99) {partFour++};
        if (partFour < 10) {
            c = "0" + partFour
        } else {
            c = partFour
        }
        ;
        target.innerHTML = "0" + partOne + a + b + c;
    }

})();
