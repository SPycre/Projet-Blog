const billetList = document.querySelector('#liste-billets');
const billetTemplate = document.querySelector('#template-billet').content;
const pageNumber = document.querySelector('#page-number');

document.querySelector('#titre-page').innerHTML = "Accueil"

function requete(data,callback) {

    jQuery.ajax({
        type: "POST",
        url: "./Server/server.php",
        dataType: 'json',
        data: data,
        success: callback
    });

}



function initBilletList(page,count) {

    requete(
        {function:'getAllBillets' , arguments: [page*count,count]},
        function (obj,textstatus) {
            if ( !('error' in obj) ) {

                billetList.innerHTML = "";
                pageVar = page;
                pageNumber.innerHTML = pageVar+1;

                obj.result.forEach(billet => {
                    const billetNode = billetTemplate.cloneNode(true);

                    const title = billetNode.querySelector('.titre-billet');
                    title.innerHTML = billet.titre;
                    const content = billetNode.querySelector('.contenu-billet');
                    content.innerHTML = billet.content;
                    const date = billetNode.querySelector('.post-date');
                    date.innerHTML = billet.date;

                    const selector = billetNode.querySelector('.selector');
                    selector.addEventListener('click',() => {
                        window.location.replace("billet.php?id="+billet.id);
                    });

                    billetList.append(billetNode);

                });

            } else {
                console.log(obj.error);
            }
        }
    )

}

const pageSelector = document.querySelectorAll('.page-select');
let pageVar = 0;
let maxPage = 1;

function updateBilletCount() {
    requete(
        {function:'countBillets' , arguments: ['test']},
        function (obj,textstatus) {
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
            initBilletList(pageVar+1,5);
        } else if (p_selector.classList.contains('previous') && pageVar-1 >= 0) {
            initBilletList(pageVar-1,5);
        } else if (p_selector.classList.contains('first') && pageVar != 0) {
            initBilletList(0,5);
        } else if (p_selector.classList.contains('last') && pageVar != maxPage) {
            initBilletList(maxPage,5);
        }
    })

})



initBilletList(0,5);
updateBilletCount();


