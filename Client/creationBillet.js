import * as utils from "./utils.js";
const add_ticket_form = document.querySelector('#add-ticket-form');
const ticket_id = new URLSearchParams(window.location.search).get('id');

if (ticket_id == null) {
    document.querySelector('#page-title').innerHTML = "Création d'un billet"
} else {
    document.querySelector('#page-title').innerHTML = "Edition d'un billet"

    utils.requete(
        {function:'getBillet',arguments: [ticket_id] },
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                add_ticket_form.elements.title.value = obj.result['titre']
                add_ticket_form.elements.content.value = obj.result['content']
            }
        }
    )

}

add_ticket_form.addEventListener('submit',(event) => {
    event.preventDefault();

    const title = add_ticket_form.elements.title.value;
    const content = add_ticket_form.elements.content.value;

    if (ticket_id == null) {
        utils.requete(
            {function : "addBillet", arguments : [title,content]},
            function (obj) {
                if ('error' in obj) {
                    console.log(obj.error);
                } else {
                    window.location.href = "index.php";
                }
            }
        )
    } else {
        utils.requete(
            {function : "editBillet", arguments : [ticket_id,title,content]},
            function (obj) {
                if ('error' in obj) {
                    console.log(obj.error);
                } else {
                    window.location.href = "billet.php?id="+ticket_id;
                }
            }
        )
    }
})