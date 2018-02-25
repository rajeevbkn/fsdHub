//This is a function to convert temperature in kelvin to fahrenheit.
function changeUnitTemp(t) {
    // t is the temp in kelvin.
    var c = t -273;
    // c is the temp in degree celsius converted from kelvin.
    var f = (9/5) * c + 32;
    // f is temp in degree fahrenheit converted from degree celsius.
    console.log('The temperature in kelvin is: ' + t + ', in degree celsius is: ' + c + ' and in degree fahrenheiet is: ' + f);
}
changeUnitTemp(294);