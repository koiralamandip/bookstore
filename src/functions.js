export const formattedGenre = (genre) => {
    let arrayofGenre = genre.split("|");
    if (arrayofGenre.length > 2)
        return arrayofGenre[0] + "|" + arrayofGenre[1] + ".. +" + (arrayofGenre.length - 2);
    else
        return genre;
}

export const getNPRPlainFromUSDPrice = (price) => {
    price = price.replace("$", "");
    price = Math.floor(price * 118.76);
    return price;
}

export const formattedPrice = (price) => {
    price = price.replace("$", "");
    price = Math.floor(price * 118.76);

    price = new Intl.NumberFormat('en-NP', { maximumSignificantDigits: price.length }).format(price);
    price = "Rs. " + price;
    return price;
}

export const formattedPriceFromNPR = (price) => {
    price = new Intl.NumberFormat('en-NP', { maximumSignificantDigits: price.length }).format(price);
    price = "Rs. " + price;
    return price;
}

export const withLeadingZero = (number) => {
    if (number < 9)
        return "0" + number;
    
    return number;
}

export const formattedDate = (date) => {
    const _date = new Date(date);
    return withLeadingZero(_date.getDate()) + "-" + withLeadingZero(_date.getMonth()) + "-" + _date.getFullYear();
}