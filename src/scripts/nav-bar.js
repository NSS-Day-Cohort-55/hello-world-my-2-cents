export const insertNavBar = () => {
    const navEl = document.getElementById("nav-el");

    navEl.innerHTML = 
    `<div class="nav__img"><img src="../images/logo.png" alt="logo"></div>
    <ul class="nav__bar">
        <li class="nav__country"><a href="../index.html">Home</a></li>
        <li class="nav__country"><a href="../countries/england.html">England</a></li>
        <li class="nav__country"><a href="../countries/japan.html">Japan</a></li>
        <li class="nav__country"><a href="../countries/finland.html">Finland</a>
        <li class="nav__country"><a href="../countries/croatia.html">Croatia</a></li>
    </ul>`;
}