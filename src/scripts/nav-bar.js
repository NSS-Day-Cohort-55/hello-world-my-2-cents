export const insertNavBar = () => {
    const navEl = document.getElementById("nav-el");

    navEl.innerHTML = `
    <ul class="nav__bar">
        <li class="nav__country">
            <a href="../index.html">
                <img src="../images/logo.png" alt="logo">
            </a>
        </li>

        <li class="nav__country">
            <a href="./england.html">
                <img src="../images/EnglishFlag.png" alt="english flag">
            </a>
        </li>

        <li class="nav__country">
            <a href="./japan.html">
                <img src="../images/JapanFlag.png" alt="japanese flag">
            </a>
        </li>

        <li class="nav__country">
            <a href="./finland.html">
                <img src="../images/FinlandFlag.png" alt="finnish flag">
            </a>
        </li>

        <li class="nav__country">
            <a href="./croatia.html">
                <img src="../images/CroatiaFlag.png" alt="croatian flag">
            </a>
        </li>
    </ul>`;
}