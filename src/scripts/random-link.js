export const getRandomOnetoFour = () => {
    const random = Math.floor(Math.random() * 4 + 1)
    return random
}

export const getLinkString = () => {
    let linkString = ''
    const random = getRandomOnetoFour()
    switch (random) {
        case 1:
            linkString = '<a href="./countries/england.html">Take me away!</a>'
            break;
        case 2:
            linkString = '<a href="./countries/japan.html">Take me away!</a>'
            break;
        case 3:
            linkString = '<a href="./countries/finland.html">Take me away!</a>'
            break;
        case 4:
            linkString = '<a href="./countries/croatia.html">Take me away!</a>'
            break;
    }
    return linkString
}

export const injectHTML = (element) => {
    element.innerHTML = getLinkString()
}