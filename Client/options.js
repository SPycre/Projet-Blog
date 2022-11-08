import * as utils from "./utils.js";
const settings_form = document.querySelector('#form');
document.querySelector('#page-title').innerHTML = "Options"

settings_form.elements.ticketsPerPage.value = utils.getCookie("ticketsPerPage");
settings_form.elements.commentsPerPage.value = utils.getCookie("commentsPerPage");
settings_form.elements.colorPage.value = utils.getCookie("colorPage");

settings_form.addEventListener('submit',(event) => {
    event.preventDefault();

    const ticketsPerPage = settings_form.elements.ticketsPerPage.value;
    const commentsPerPage = settings_form.elements.commentsPerPage.value;
    const colorPage = settings_form.elements.colorPage.value;

    utils.setCookie('ticketsPerPage',ticketsPerPage);
    utils.setCookie('commentsPerPage',commentsPerPage);
    utils.setCookie('colorPage', colorPage);

    window.location.href = window.location.href;

})