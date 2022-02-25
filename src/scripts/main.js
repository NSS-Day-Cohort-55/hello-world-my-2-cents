import { createFooterText } from "./footer.js";
import * as nav from "./nav-bar.js";
import { injectHTML } from "./random-link.js";

let pageName = window.location.pathname;
if (pageName === '/'){
    //Insert navbar for index page at element with id of "nav-el"
    nav.insertIndexNavBar("nav-el");
} else {
    //Insert nabar for countries page at element with id of "nav-el"
    nav.insertNavBar("nav-el");
}
createFooterText();


//Get random button element
const randomButton = document.getElementById("random-btn")

//inject random country page to the innerHTML of the button
randomButton.addEventListener('click', injectHTML(randomButton))