// Formatting genres..
// Display the names of two genres and append with "+ <the number of additional genres>"
export const formattedGenre = (genre) => {
    let arrayofGenre = genre.split("|");
    if (arrayofGenre.length > 2)
        return arrayofGenre[0] + "|" + arrayofGenre[1] + ".. +" + (arrayofGenre.length - 2);
    else
        return genre;
}

// Function to get the plain (unformatted) price from USD to NPR
export const getNPRPlainFromUSDPrice = (price) => {
    price = price.replace("$", "");
    price = Math.floor(price * 118.76);
    return price;
}

// Function to get the formatted price from USD to NPR
export const formattedPrice = (price) => {
    price = price.replace("$", "");
    price = Math.floor(price * 118.76);

    price = new Intl.NumberFormat('en-NP', { maximumSignificantDigits: price.length }).format(price);
    price = "Rs. " + price;
    return price;
}

// Function to get the formatted price from unformatted plain NPR to formatted NPR
export const formattedPriceFromNPR = (price) => {
    price = new Intl.NumberFormat('en-NP', { maximumSignificantDigits: price.length }).format(price);
    price = "Rs. " + price;
    return price;
}

// Append a leading "0" on dates with the number less than 9, like 05-03-2020
export const withLeadingZero = (number) => {
    if (number < 9)
        return "0" + number;
    
    return number;
}

// Format the date in DD-MM-YYYY format
export const formattedDate = (date) => {
    const _date = new Date(date);
    return withLeadingZero(_date.getDate()) + "-" + withLeadingZero(_date.getMonth()) + "-" + _date.getFullYear();
}