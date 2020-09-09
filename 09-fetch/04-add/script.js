/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")
    run.addEventListener("click", fetchHeroes)

    function fetchHeroes() {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then((data) => addHeroes(data));

        function addHeroes(data) {
            let heroName = document.getElementById('hero-name').value
            let heroAlter = document.getElementById('hero-alter-ego').value
            let heroPower = document.getElementById('hero-powers').value
            let addElement = data.length + 1;
            data[data.length] = {
                "id": addElement,
                "name": heroName,
                "alterEgo": heroAlter,
                "abilities": [heroPower]
            };
            console.log(data);
        }
    }
})();
