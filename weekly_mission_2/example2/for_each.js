const numbers = [1,2,3,5,1]
console.log('Ejemplo for each')
numbers.forEach(num => console.log(num))

let product = 1

numbers.forEach(num => product*=num )
console.log('Ejemplo for each para multiplicar elementos de una lista')
console.log(product)


const mathSymbols = ['alpha', 'epsilon', 'lambda', 'teta', 'sigma']
console.log('Ejemplo for each para imprimir en mayúsculas todas las palabras')
mathSymbols.forEach(symbol => console.log(symbol.toUpperCase()))
