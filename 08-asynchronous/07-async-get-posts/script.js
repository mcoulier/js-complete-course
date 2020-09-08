/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")
    run.addEventListener("click", getPostsConsole)

    async function getPostsConsole(){
        return new Promise((resolve, reject) => {
            resolve(window.lib.getPosts())
        })
            .then(result => {
                console.log(result);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
})();
