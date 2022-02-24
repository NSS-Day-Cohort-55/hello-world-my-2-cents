//This only works for files located in src/countries due to relative pathing
document.getElementById("nav-el").innerHTML=
`<div class="nav__img"><img src="../images/logo.png" alt="logo"></div>
<ul class="nav__bar">
    <li class="nav__country"><a href="../index.html">Home</a></li>
    <li class="nav__country"><a href="../countries/england.html">England</a></li>
    <li class="nav__country"><a href="../countries/japan.html">Japan</a></li>
    <li class="nav__country"><a href="../countries/finland.html">Finland</a>
    <li class="nav__country"><a href="../countries/croatia.html">Croatia</a></li>
</ul>`;

// const footerString = '&copy; 2 Cents, All rights reserved.'
// const footerEl = document.getElementById("footer-el")

// footerEl.innerHTML = footerString
import { createFooterText } from "./footer.js"

createFooterText()