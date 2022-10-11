const urlParams = new URLSearchParams(window.location.search);
const billet = document.querySelector('#billet');
const titrebillet = document.querySelector('#titre-billet');
const contenubillet = document.querySelector('#contenu-billet');
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
        function (obj,textstatus) {
            if ( !('error' in obj) ) {

                titrebillet.innerHTML = obj.result['titre'];
                contenubillet.innerHTML = obj.result['content'];

            } else {
                console.log(obj.error);
            }
        }
    )

}

initBillet(id)