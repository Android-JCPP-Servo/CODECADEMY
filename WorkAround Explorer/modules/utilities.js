export function formatNumber(number) {
    // Split the value at the decimal point
    let str = Math.floor(number).toString().split('.');

    // Check length of section before decimal point
    if (str[0].length >= 4) {
        // Add comma after every 3 numbers
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    // Rejoin and return string
    return str.join('.');
}