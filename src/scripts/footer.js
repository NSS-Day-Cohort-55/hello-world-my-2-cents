export const createFooterText = () => {
    const footerString = '&copy; 2 Cents, All rights reserved.';
    const footerEl = document.getElementById("footer-el");

    footerEl.innerHTML = footerString;
}