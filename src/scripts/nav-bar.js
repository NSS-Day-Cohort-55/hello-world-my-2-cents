//This function should be called from countries page, otherwise pathing will not work
export const insertNavBar = (elementId) => {
    const elementLocation = document.getElementById(elementId);

    elementLocation.innerHTML = `
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


//This function should only be called from index.html, otherwise the file pathing will be wrong
export const insertIndexNavBar = (elementId) => {
    const elementLocation = document.getElementById(elementId);

    elementLocation.innerHTML = `
        <ul class="nav__bar">
            <li class="nav__country">
                <a href="index.html">
                    <img src="images/logo.png" alt="logo">
                </a>
            </li>
            <li class="nav__country">
                <a href="./countries/england.html">
                    <img src="images/EnglishFlag.png" alt="english flag">
                </a>
            </li>
            <li class="nav__country">
                <a href="countries/japan.html">
                    <img src="images/JapanFlag.png" alt="japanese flag">
                </a>
            </li>
            <li class="nav__country">
                <a href="countries/finland.html">
                    <img src="images/FinlandFlag.png" alt="finnish flag">
                </a>
            </li>
            <li class="nav__country">
                <a href="countries/croatia.html">
                    <img src="images/CroatiaFlag.png" alt="croatian flag">
                </a>
            </li>
        </ul>
    `;
}