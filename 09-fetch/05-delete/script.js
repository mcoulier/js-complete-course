/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
            .then((data) => loopHeroes(data));

        function loopHeroes(data) {
            const heroId = document.getElementById("hero-id").value
            const delHero = data.filter()
            console.log(delHero)

        }
    }
})();
