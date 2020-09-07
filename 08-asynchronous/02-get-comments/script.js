/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")
    run.addEventListener("click", getPostsWithComments)

    function getPostsWithComments(){
        window.lib.getPosts(function(error, posts){
            posts.forEach(post => {
                window.lib.getComments(post.id, function(error, comments) {
                    post.comment = comments;
                    console.log(post);
                })
            })
            })
    }
})();