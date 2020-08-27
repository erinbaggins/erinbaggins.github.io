// today's forecast
const kelvin = 293;

//today's forecast in celcius
const celsius = kelvin - 273;

//today's forecast in F
let fahrenheit = celsius * (9 / 5) + 32;

//round F value to even num
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33 / 100);

newton = Math.floor(newton)

console.log(`The temperature is ${fahrenheit} degrees today.`)

console.log(`The temperature is ${celsius} degrees Celsius.`)

console.log(`The temperature in Kelvin is ${kelvin} degrees.`)

console.log(`The temperature in Newton is ${newton} degrees.`)