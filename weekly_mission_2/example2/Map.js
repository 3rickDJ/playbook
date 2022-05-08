let numbers = [1,2,3,1,1,1,0]
// Ejemplo map para convertir a cuadrados
const doubleNumbers = numbers.map((number) => number*2)
console.log(doubleNumbers)


//Ejemplo para convertir numeros a letras más un dígito
let bins = [10,9,8,7,6,5,4]
let  stringOfNumbers = bins.map(function(number){return (number+1).toString()})
console.log(stringOfNumbers)

let names = ['eric', 'mario', 'huachimingo', 'perxita', 'tobuas', 'elpapu']
const namesAndValues = names.map((name,index)=> {
  if (index%2==0) {
    return ({[name]: bins[index].toString()})
  } else {
    return 'pat'
  }
})

console.log('Imprimir llaves o insertar un comodin si es necesario')
console.log(namesAndValues)

const returnStr = (element) => element.toString()

stringOfNumbers = numbers.map(returnStr)

console.log(stringOfNumbers)
