/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then((data) => loopHeroes(data));

        function loopHeroes(data) {
            for (let i = 0; i < data.length; i++) {
                const heroId = document.getElementById("hero-id").value
                const temp = document.querySelector("#tpl-hero").content.cloneNode(true)
                if (heroId == data[i].id) {
                    temp.querySelector(".name").innerHTML = data[i].name
                    temp.querySelector(".alter-ego").innerHTML = data[i].alterEgo
                    temp.querySelector(".powers").innerHTML = data[i].abilities
                    target.appendChild(temp)
                }
            }
        }
    }
})();
