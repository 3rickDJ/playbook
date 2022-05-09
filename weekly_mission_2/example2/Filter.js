
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
let countries = countries7.filter((_, index) =>  index%2==1)
console.log('Paises impares')
console.log(countries)

countries = countries7.filter((country) => country.includes('e') )

console.log('Paises con \'e\' en su nombre')
console.log(countries)

countries = countries7.filter((country)=>country.length >6)

console.log('Paises con más de 6 letras en su nombre')
console.log(countries)
