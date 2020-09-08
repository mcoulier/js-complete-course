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
        return new Promise((resolve) => {
            resolve(window.lib.getPosts())
        })
            .then((result) => result.forEach(function (posts) {
                    new Promise((resolve) => {
                        let showComments = window.lib.getComments(posts.id)
                        resolve(result)
                        posts.comments = showComments;
                    }).then(result => console.log(result))
            }
            )).catch(function (error) {
                console.log(error)
            })
    }
})();

