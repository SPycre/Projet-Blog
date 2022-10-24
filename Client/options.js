import * as utils from "./utils.js";
const settings_form = document.querySelector('#form');
document.querySelector('#page-title').innerHTML = "Options"

settings_form.elements.ticketsPerPage.value = utils.getCookie("ticketsPerPage");
settings_form.elements.commentsPerPage.value = utils.getCookie("commentsPerPage");

settings_form.addEventListener('submit',(event) => {
    event.preventDefault();

    const ticketsPerPage = settings_form.elements.ticketsPerPage.value;
    const commentsPerPage = settings_form.elements.commentsPerPage.value;

    utils.setCookie('ticketsPerPage',ticketsPerPage);
    utils.setCookie('commentsPerPage',commentsPerPage);

    window.location.href = window.location.href;

})