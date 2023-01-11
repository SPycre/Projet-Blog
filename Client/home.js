import * as utils from "./utils.js";
const ticket_list = document.querySelector('#liste-billets');

/**
 * Number of tickets per page
 * @type {int}
 */
let ticketsPerPage = utils.getCookie('ticketsPerPage');
if (ticketsPerPage == null) {
    utils.setCookie('ticketsPerPage',5);
    ticketsPerPage = 5;
}
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

if ( window.screen.availWidth <= 600 ) {
    document.querySelector("#liste-billets").style.backgroundColor = "transparent";
}

/**
 * Display a page of selectable tickets on the home page
 * @param {int} page Page number to display on the home page
 */
function initTickets(page) {

    utils.requeteV2(
        '/tickets/getTickets','GET',{page:page*ticketsPerPage,count:ticketsPerPage},
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
                    const comments = billetNode.querySelector('.comment-count');
                    comments.innerHTML = billet.comments+" commentaires";

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
    utils.requeteV2(
        '/sessions/checkConnect','GET',{},
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
    utils.requeteV2(
        '/tickets/countTicket','GET',{},
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
 * @param {HTMLElement} p_selector Page selector button to initialize
 */
function initPageSelector(p_selector) {
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
}


document.querySelectorAll('.page-select').forEach(p_selector => {
    initPageSelector(p_selector);
})


initAdmin();
initTickets(0);
calculateMaxTicketPage();


