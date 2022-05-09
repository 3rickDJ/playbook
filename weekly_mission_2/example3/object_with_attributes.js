class Student {
  constructor( name , age, subjects){
    this.name = name
    this.age = age
    this.subjects = subjects
  }
}
//Make an object from class Student (this is instantiate)
const erickStudent = new Student('Erick', 20, ['Discrete Mathematics', 'physics', 'ensambler'])
console.log('Example 3: instantiate an object with attributes')
console.log(erickStudent)
