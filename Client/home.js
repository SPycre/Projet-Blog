const ticket_list = document.querySelector('#liste-billets');

/**
 * Number of tickets per page
 * @type {int}
 */
let ticketsPerPage = 5;
/**
 * Number of currently displayed tickets page
 * @type {int}
 */
let numberOfPage = 0;
/**
 * Number of displayable tickets page
 * @type {int}
 */
let lastPageNumber = 1;

document.querySelector('#page-title').innerHTML = "Accueil"

/**
 * Pre-made request to send to the server
 * @param {object} data data to send to the server. Contains function name and arguments
 * @param {function} callback callback function to execute once the request is done
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
 * Display a page of selectable tickets on the home page
 * @param {int} page Page number to display on the home page
 */
function initTickets(page) {

    requete(
        {function:'getAllBillets' , arguments: [page*ticketsPerPage,ticketsPerPage]},
        function (obj) {
            if ( !('error' in obj) ) {

                ticket_list.querySelectorAll('.billet').forEach(ticketNode => {
                    ticketNode.remove();
                })
                numberOfPage = page;
                document.querySelector('#page-number').innerHTML = numberOfPage+1;
                const ticket_template = document.querySelector('#template-billet').content;

                obj.result.forEach(billet => {
                    const billetNode = ticket_template.cloneNode(true);

                    const title = billetNode.querySelector('.titre-billet');
                    title.innerHTML = billet.titre;
                    const content = billetNode.querySelector('.contenu-billet');
                    content.innerHTML = billet.content;
                    const date = billetNode.querySelector('.post-date');
                    date.innerHTML = billet.date;

                    const selector = billetNode.querySelector('.selector');
                    selector.addEventListener('click',() => {
                        window.location.href = "billet.php?id="+billet.id;
                    });

                    ticket_list.append(billetNode);

                });

            } else {
                console.log(obj.error);
            }
        }
    )

}

/**
 * Initialize admin only options ( add-ticket button )
 */
function initAdmin() {
    requete(
        {function:'checkConnect', arguments: [0]},
        function (obj) {
            if ('error' in obj) {
                console.log(obj.error);
            } else {
                if (obj.result != false) {
                    const add_ticket_holder = document.querySelector('#add-ticket-template').content.cloneNode(true);
                    ticket_list.prepend(add_ticket_holder);
                    const add_ticket_button = ticket_list.querySelector('#add-ticket');
                    add_ticket_button.addEventListener('click',() => {
                        window.location.href = "creationBillet.php";
                    })
                }
            }
        }
    );
}

/**
 * Calculate the number of pages depending the number of tickets
 */
function calculateMaxTicketPage() {
    requete(
        {function:'countBillets' , arguments: [0]},
        function (obj) {
            if ( !('error' in obj) ) {
                lastPageNumber = Math.ceil(obj.result/ticketsPerPage) - 1;
            } else {
                console.log(obj.error);
            }
        }
    )
}

/**
 * Initialize clickable page selector to navigate trough tickets pages
 */
document.querySelectorAll('.page-select').forEach(p_selector => {
    p_selector.addEventListener('click', () => {
        if (p_selector.classList.contains('next') && numberOfPage+1 <= lastPageNumber) {
            initTickets(numberOfPage+1);
        } else if (p_selector.classList.contains('previous') && numberOfPage-1 >= 0) {
            initTickets(numberOfPage-1);
        } else if (p_selector.classList.contains('first') && numberOfPage != 0) {
            initTickets(0);
        } else if (p_selector.classList.contains('last') && numberOfPage != lastPageNumber) {
            initTickets(lastPageNumber);
        }
    })
})


initAdmin();
initTickets(0);
calculateMaxTicketPage();


