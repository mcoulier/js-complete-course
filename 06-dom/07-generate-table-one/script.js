/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function addTable() {
        var c, r, t;
        t = document.getElementById("target").createElement('table');
        r = t.insertRow(0);
        c = r.insertCell(0);
        c.innerHTML = 123;
        c = r.insertCell(1);
        c.innerHTML = 456;
        document.getElementById("addtable").appendChild(t);
    }

})();

var table = document.getElementById("target").createElement("TABLE");
var row = table.insertRow (10);