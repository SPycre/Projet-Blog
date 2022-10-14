const connect_form_holder = document.querySelector('#connect-form-holder');

/**
 * Connection or disconnection form
 * @type {HTMLFormElement}
 */
let form;

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

/**
 * Check if someone is connected on this session
 * Display connection or disconnection form
 */
function checkConnection() {
    requete(
        {function:'checkConnect', arguments: [0]},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                if (form != null) {
                    form.remove();
                }

                if (obj.result != false) {
                    form = document.querySelector('#form-disconnect-template').content.cloneNode(true);
                    const user_name = form.querySelector('#name-user');
                    user_name.innerHTML = "Bienvenue, " + obj.result +'!';
                    connect_form_holder.append(form);

                    form = connect_form_holder.querySelector('#form-disconnect');
                    form.addEventListener('submit',(event) => {
                        event.preventDefault();
                        requete(
                            {function:'disconnect', arguments: [0]},
                            function (obj) {
                                if ('error' in obj) {
                                    console.log(obj.error);
                                } else {
                                    window.location.href = "index.php";
                                }
                            }
                        )
                    })

                    connect_form_holder.append(form);

                } else {
                    form = document.querySelector('#form-connection-template').content.cloneNode(true);
                    connect_form_holder.append(form);

                    form = connect_form_holder.querySelector('#form-connection');
                    form.addEventListener('submit',(event) => {
                        event.preventDefault();
                        const username = form.elements.username.value;
                        const password = form.elements.password.value;
                        requete(
                            {function:'connect', arguments: [username, password]},
                            function (obj) {
                                if ('error' in obj) {
                                    console.log(obj.error);
                                } else {
                                    window.location.href = "index.php";
                                }
                            }
                        )
                    });
                    
                    
                }
            }
        }
    )
}

checkConnection();

