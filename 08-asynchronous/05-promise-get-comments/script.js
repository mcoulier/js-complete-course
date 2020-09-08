/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")
    run.addEventListener("click", getPostsConsole)

    function getPostsConsole(){
        return new Promise((resolve, reject) => {
            resolve(window.lib.getPosts())
        })
            .then((result) => result.forEach(function (post) {
                    new Promise((resolve, reject) => {
                        let result = window.lib.getComments(post.id)
                        resolve(result)
                    }).then(result => console.log(result))

                }
            )).catch(function (error) {
                console.log(error)
            })
    }
})();

