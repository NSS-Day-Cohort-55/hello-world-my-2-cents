export const getRandomOnetoFour = () => {
    const random = Math.floor(Math.random() * 4 + 1)
    return random
}

export const getLinkString = () => {
    let linkString = ''
    const random = getRandomOnetoFour()
    switch (random) {
        case 1:
            linkString = "./countries/england.html"
            break;
        case 2:
            linkString = "./countries/japan.html"
            break;
        case 3:
            linkString = "./countries/finland.html"
            break;
        case 4:
            linkString = "./countries/croatia.html"
            break;
    }
    return linkString
}

export const injectHTML = (element) => {
    element.href = getLinkString()
}