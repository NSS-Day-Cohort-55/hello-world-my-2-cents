import { createFooterText } from "./footer.js";
import * as nav from "./nav-bar.js";

let pageName = window.location.pathname;
console.log(pageName);
if (pageName === '/'){
    //Insert navbar for index page at element with id of "nav-el"
    nav.insertIndexNavBar("nav-el");
} else {
    //Insert nabar for countries page at element with id of "nav-el"
    nav.insertNavBar("nav-el");
}
createFooterText();