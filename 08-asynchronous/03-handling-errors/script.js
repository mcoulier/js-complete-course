/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")
    run.addEventListener("click", arrayOfPeople)

    function arrayOfPeople(){
        window.lib.getPersons(function(error, array){
            if (error){
                console.error(error)
            }
            else {
                console.log(array);
            }
        })
    }
})();
