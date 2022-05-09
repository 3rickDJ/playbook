class Ajolonauta{
  constructor(name, age, stack){
    this.name = name
    this.age = age
    this.stack = stack
    this.excercises_completed = 0
    this.exercises_todo = 99
  }
  // We can access attributes
  get getExercisesCompleted(){
    return this.excercises_completed
  }
  set  setExcercises_completed(excercise){
    this.excercises_completed = excercise
  }
}

console.log('Example 6: Getters to access object attributes')
const woopa = new Ajolonauta('Woopa', 1, [])
console.log(woopa.getExercisesCompleted)

// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
  constructor(name, mission){
    this.name = name
    this.mission = mission
    this.students = 0
    this.lives = 0
  }

  get getStudents(){
    return this.students
  }

  get getLives(){
    return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

console.log('Ejemplo 7: Setters para modificar los atributos del objeto')
const missionCommanderNode = new MissionCommander('Carlo', 'NodeJS')

console.log(missionCommanderNode.getStudents) // 0 by default
console.log(missionCommanderNode.getLives)// 0 by default

// updating attributes through setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents) //  0 by default
console.log(missionCommanderNode.getLives)// 0 0 by default
