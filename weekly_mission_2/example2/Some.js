// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log('There is at least one false in bools: ' + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log('Sorted elements of products')
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort((a, b) => b.age-a.age)

console.log('Ejemplo 16: Ordenando una lista de objetos por la edad de mayor a menor')
console.log(users) // sorted ascending

const users2 = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users2.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log('Ejemplo 16: Ordenando una lista de objetos por la edad')
console.log(users2) // sorted ascending
