const add_ticket_form = document.querySelector('#add-ticket-form');

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

add_ticket_form.addEventListener('submit',(event) => {
    event.preventDefault();

    const title = add_ticket_form.elements.title.value;
    const content = add_ticket_form.elements.content.value;

    requete(
        {function : "addBillet", arguments : [title,content]},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            }
        }
    )
})