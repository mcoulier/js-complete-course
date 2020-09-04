/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    let txt = document.getElementById("target").innerText;
    let chars = Array.from(txt);
    let wave = "";
    let fsize = [1, 2, 3, 4, 5, 4, 3, 2, 1,]
    for (let i = 0; i < chars.length; i++){
        wave += "<span>" + chars[i] + "</span>";
    }
    document.getElementById("target").innerHTML = wave;
    let characters = document.getElementsByTagName("span");
    for (let x = 0; x < characters.length; x++){
        let y = x+1;
        characters[y].style.fontSize = fsize[x % fsize.length] + "1px";
    }
})();