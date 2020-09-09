/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")
    run.addEventListener("click", fetchHeroes)

    function fetchHeroes(){
        temp = document.getElementsByTagName("template")[0];
        item = temp.content.querySelector("target");

        fetch('http://localhost:3000/heroes')
             .then(response => response.json())
             .then(data => {
                 console.log(data)
             })
             .catch(error => console.error(error))
    }
})();
