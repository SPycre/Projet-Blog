import * as utils from "./utils.js";
const connect_form_holder = document.querySelector('#connect-form-holder');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const body = document.querySelector('body');
const sectionBox = document.querySelectorAll('.section-box')


/**
 * Connection or disconnection form
 * @type {HTMLFormElement}
 */

document.querySelector('#burger').addEventListener('click',() => {
    document.querySelector('#burger').classList.toggle('open');
    document.querySelector('.burgermenu').classList.toggle('open');
});

/** */

let colorPage = utils.getCookie('colorPage');
switch (colorPage) {
    case 'default' :
    footer.style.backgroundColor = "#79A3FF";
    header.style.backgroundColor = "#79A3FF";
    body.style.backgroundColor = "#F0F8FF"
    break;

    case 'pink' :
    footer.style.backgroundColor = "#FF69B4"
    header.style.backgroundColor = "#FF69B4"
    body.style.backgroundColor = "#FFE4E1"
    sectionBox.forEach(box => {
        box.style.backgroundColor = "#FF69B4"
    });
    break;

    case 'night' :
    footer.style.backgroundColor = "#474758"
    header.style.backgroundColor = "#474758"
    body.style.backgroundColor = "#5A5E6B"
    sectionBox.forEach(box => {
        box.style.backgroundColor = "#474758"
    });
    break;    

    case 'green' :
    footer.style.backgroundColor = "#87E990"
    header.style.backgroundColor = "#87E990"
    body.style.backgroundColor = "#BDECB6"
    sectionBox.forEach(box => {
        box.style.backgroundColor = "#87E990"
    });
    break;   

    case 'purple' :
    footer.style.backgroundColor = "#9683EC"
    header.style.backgroundColor = "#9683EC"
    body.style.backgroundColor = "#E8EBFF"
    sectionBox.forEach(box => {
        box.style.backgroundColor = "#9683EC"
    });
    break;   

    case 'coquelicot' :
    footer.style.backgroundColor = "#C60800"
    header.style.backgroundColor = "#C60800"
    body.style.backgroundColor = "#E9967A"
    sectionBox.forEach(box => {
        box.style.backgroundColor = "#C60800"
    });
    break;

    case 'gold' :
    footer.style.backgroundColor = "#DAA520"
    header.style.backgroundColor = "#DAA520"
    body.style.backgroundColor = "#F0E68C"
    sectionBox.forEach(box => {
        box.style.backgroundColor = "#DAA520"
    });
    break;
}


/**
 * Check if someone is connected on this session
 * Display connection or disconnection form
 */
function checkConnection() {
    utils.requeteV2(
        '/sessions/checkConnect','GET',{},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                if (form != null) {
                    form.remove();
                }

                if (obj.result != false) {
                    /*
                    form = document.querySelector('#form-disconnect-template').content.cloneNode(true);
                    const user_name = form.querySelector('#name-user');
                    user_name.innerHTML = "Bienvenue, " + obj.result +'!';
                    connect_form_holder.append(form);

                    form = connect_form_holder.querySelector('#form-disconnect');
                    form.addEventListener('submit',(event) => {
                        event.preventDefault();
                        utils.requeteV2(
                            '/sessions/disconnect','POST',{},
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
                    */

                } else {
                    /*
                    form = document.querySelector('#form-connection-template').content.cloneNode(true);
                    connect_form_holder.append(form);

                    form = connect_form_holder.querySelector('#form-connection');
                    form.addEventListener('submit',(event) => {
                        event.preventDefault();
                        const username = form.elements.username.value;
                        const password = form.elements.password.value;
                        utils.requeteV2(
                            '/sessions/connect','POST',{username:username,password:password},
                            function (obj) {
                                if ('error' in obj) {
                                    console.log(obj.error);
                                } else {
                                    window.location.href = window.location.href;
                                }
                            }
                        )
                    });
                    */
                    
                }
            }
        }
    )
}

checkConnection();

