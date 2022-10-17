const add_ticket_form = document.querySelector('#add-ticket-form');
const ticket_id = new URLSearchParams(window.location.search).get('id');

/**
 * Pre-made request to send to the server
 * @param {*} data data to send to the server. Contains function name and arguments
 * @param {*} callback callback function to execute once the request is done
 */
 function requete(data,callback) {
    fetch('./Server/server.php',{
        method : "POST",
        headers : {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify(data),
    }).then(function(response) {
        return response.json();
    }).then(callback);
}

if (ticket_id == null) {
    document.querySelector('#page-title').innerHTML = "Création d'un billet"
} else {
    document.querySelector('#page-title').innerHTML = "Edition d'un billet"

    requete(
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
        requete(
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
        requete(
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