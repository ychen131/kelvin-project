// set temperature variable in kelvin 
const kelvin = 293;

// convert kelvin to celsius
var celsius = kelvin - 273;

// convert celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// round down fahrenheit
fahrenheit = Math.floor(fahrenheit);

// log the temperature in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert celsius to Newton scale
var newton = Math.floor(celsius * (33/100));

// log the temperature in Newton
console.log(`The temperature is ${newton} degrees Newton.`);
