const urlParams = new URLSearchParams(window.location.search);
const billet = document.querySelector('#billet');
const titrebillet = document.querySelector('#titre-billet');
const contenubillet = document.querySelector('#contenu-billet');
const formcomment = document.querySelector('#form-commentaire');
const commenttemplate = document.querySelector('#template-comment').content;
const commentList = document.querySelector('#list-comment');
const pageNumber = document.querySelector('#page-number');
const id = urlParams.get('id');

document.querySelector('#titre-page').innerHTML = "Billet"

function requete(data,callback) {

    jQuery.ajax({
        type: "POST",
        url: "./Server/server.php",
        dataType: 'json',
        data: data,
        success: callback
    });

}


function initBillet(id) {

    requete(
        {function:'getBillet' , arguments: [id]},
        function (obj) {
            if ( !('error' in obj) ) {
                titrebillet.innerHTML = obj.result['titre'];
                contenubillet.innerHTML = obj.result['content'];

            } else {
                console.log(obj.error);
            }
        }
    )

}

formcomment.addEventListener('submit',(event) => {
    event.preventDefault();

    const pseudo = formcomment.elements.pseudo.value;
    const comment = formcomment.elements.comment.value;

    requete(
        {function:'addComment', arguments: [id, pseudo, comment]},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                initComments(id,0,5);
                updateCommentCount(id);
            }
        }
    )
});


const pageSelector = document.querySelectorAll('.page-select');
let pageVar = 0;
let maxPage = 1;


function initComments(id,page,count) {

    requete(
        {function:'getComments' , arguments: [id,page*count,count]},
        function (obj) {
            if ( !('error' in obj) ) {

                commentList.innerHTML = "";
                pageVar = page;
                pageNumber.innerHTML = pageVar+1;

                if (obj.result.length == 0) {
                    commentList.innerHTML = "Soyez le premier à commenter!"
                }

                obj.result.forEach(comment => {
                    const commentNode = commenttemplate.cloneNode(true);

                    const pseudo = commentNode.querySelector('.pseudo-comment');
                    pseudo.innerHTML = comment.pseudo;
                    const contenu = commentNode.querySelector('.contenu-comment');
                    contenu.innerHTML = comment.commentaire;
                    const date = commentNode.querySelector('.date-comment');
                    date.innerHTML = comment.date;

                    commentList.append(commentNode);
                });
            } else {
                console.log(obj.error);
            }
        }
    )

}

function updateCommentCount(id) {
    requete(
        {function:'countComments' , arguments: [id]},
        function (obj) {
            if ( !('error' in obj) ) {
                maxPage = Math.ceil(obj.result/5) - 1;
            } else {
                console.log(obj.error);
            }
        }
    )
}

pageSelector.forEach(p_selector => {

    p_selector.addEventListener('click', () => {
        if (p_selector.classList.contains('next') && pageVar+1 <= maxPage) {
            initComments(id,pageVar+1,5);
        } else if (p_selector.classList.contains('previous') && pageVar-1 >= 0) {
            initComments(id,pageVar-1,5);
        } else if (p_selector.classList.contains('first') && pageVar != 0) {
            initComments(id,0,5);
        } else if (p_selector.classList.contains('last') && pageVar != maxPage) {
            initComments(id,maxPage,5);
        }
    })

})


initBillet(id)
updateCommentCount(id)
initComments(id,0,5)