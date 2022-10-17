const add_comment_form = document.querySelector('#form-commentaire');
const comment_list = document.querySelector('#list-comment');
const ticket_id = new URLSearchParams(window.location.search).get('id');

/**
 * Number of comments per page
 * @type {int}
 */
let commentsPerPage = 5
/**
 * Number of currently displayed comments page
 * @type {int}
 */
let numberOfPage = 0;
/**
 * Number of displayable comments page
 * @type {int}
 */
let lastPageNumber = 1;

document.querySelector('#page-title').innerHTML = "Billet"

/**
 * Pre-made request to send to the server
 * @param {*} data data to send to the server. Contains function name and arguments
 * @param {*} callback callback function to execute once the request is done
 */
function requete(data,callback) {
    jQuery.ajax({
        type: "POST",
        url: "./Server/server.php",
        dataType: 'json',
        data: data,
        success: callback
    });
}

/**
 * Display tickets details
 */
function initTicket() {
    requete(
        {function:'getBillet' , arguments: [ticket_id]},
        function (obj) {
            if ( !('error' in obj) ) {
                document.querySelector('#titre-billet').innerHTML = obj.result['titre'];
                document.querySelector('#contenu-billet').innerHTML = obj.result['content'];

            } else {
                console.log(obj.error);
            }
        }
    )

}

/**
 * Display selected page of comments under the ticket
 * @param {int} page Index of the comments page to display
 */
function initComments(page) { 
    requete(
        {function:'getComments' , arguments: [ticket_id,page*commentsPerPage,commentsPerPage]},
        function (obj) {
            if ( !('error' in obj) ) {
                comment_list.innerHTML = "";
                numberOfPage = page;
                document.querySelector('#page-number').innerHTML = numberOfPage+1;
                if (obj.result.length == 0) {
                    comment_list.innerHTML = "Soyez le premier à commenter!"
                }

                const comment_template = document.querySelector('#template-comment').content;

                obj.result.forEach(comment => {
                    const commentNode = comment_template.cloneNode(true).querySelector('.comment-article');
                    commentNode.setAttribute("id",comment.id)

                    const pseudo = commentNode.querySelector('.pseudo-comment');
                    pseudo.innerHTML = comment.pseudo;
                    const contenu = commentNode.querySelector('.contenu-comment');
                    contenu.innerHTML = comment.commentaire;
                    const date = commentNode.querySelector('.date-comment');
                    date.innerHTML = comment.date;

                    comment_list.append(commentNode);
                });
                initAdmin()
            } else {
                console.log(obj.error);
            }
        }
    )
}

/**
 * Calculate number of displayable pages for comment list
 */
function calculateMaxCommentPage() {
    requete(
        {function:'countComments' , arguments: [ticket_id]},
        function (obj) {
            if ( !('error' in obj) ) {
                lastPageNumber = Math.ceil(obj.result/commentsPerPage) - 1;
            } else {
                console.log(obj.error);
            }
        }
    )
}

/**
 * Initialize admin only options for comments ( remove comment )
 */
 function initAdmin() {
    requete(
        {function:'checkConnect', arguments: [0]},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                if (obj.result != false) {
                    const edit_ticket = document.querySelector('#edit-billet') ;
                    edit_ticket.style.visibility = "visible"

                    edit_ticket.addEventListener('click',() => {
                        
                    })

                    comment_list.querySelectorAll('.comment-article').forEach(comment => {
                        const trash_bin = comment.querySelector('.trash-comment');

                        trash_bin.addEventListener('click',() => {
                            requete(
                                {function:'removeComment', arguments: [comment.id]},
                                function (obj) {
                                    if ('error' in obj) {
                                        console.log(obj.error);
                                    } else {
                                        initComments(numberOfPage);
                                    }
                                }
                            )
                        })
                        comment.addEventListener('mouseover',() => {
                            trash_bin.style.visibility = "visible";
                        })
                        comment.addEventListener('mouseout',() => {
                            trash_bin.style.visibility = "hidden";
                        })
                    });
                }
            }
        }
    );
}

/**
 * Adds submit event to the add comment form
 */
 add_comment_form.addEventListener('submit',(event) => {
    event.preventDefault();
    const pseudo = add_comment_form.elements.pseudo.value;
    const comment = add_comment_form.elements.comment.value;
    requete(
        {function:'addComment', arguments: [ticket_id, pseudo, comment]},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                initComments(0);
                calculateMaxCommentPage();
            }
        }
    )
});

/**
 * Initialize clickable page selector to navigate trough comments pages
 */
 document.querySelectorAll('.page-select').forEach(p_selector => {
    p_selector.addEventListener('click', () => {
        if (p_selector.classList.contains('next') && numberOfPage+1 <= lastPageNumber) {
            initComments(numberOfPage+1,5);
        } else if (p_selector.classList.contains('previous') && numberOfPage-1 >= 0) {
            initComments(numberOfPage-1,5);
        } else if (p_selector.classList.contains('first') && numberOfPage != 0) {
            initComments(0,5);
        } else if (p_selector.classList.contains('last') && numberOfPage != lastPageNumber) {
            initComments(lastPageNumber,5);
        }
    })
});


initTicket()
calculateMaxCommentPage()
initComments(0)