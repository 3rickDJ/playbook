const explorers = [
  {
    name: 'Explorer 1',
    exercises_completed: 10,
    rate: 99,
    city: 'CDMX',
    stack: [
      'js',
      'c#'
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: 'Explorer 2',
    exercises_completed: 9,
    city: 'Veracruz',
    rate: 50,
    stack: [
      'js'
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: 'Explorer 3',
    exercises_completed: 3,
    city: 'Sonora',
    rate: 100,
    stack: [
      'elixir'
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]
// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('Explorer names')
explorers.forEach(explorer => console.log(explorer.name))
// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(explorer => console.log(explorer.stack))
// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorerStacks = explorers.map(element => element.stack)
console.log('Explorer Stacks')
console.log(explorerStacks)
// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorerJS = explorers.filter(element => element.stack.includes('js'))
console.log('Explorers which use JS')
console.log(explorerJS)
// Busca el primer explorer que sea de la CDMX, usa FIND
const explorerCDMX = explorers.find(element => element.city=='CDMX')
console.log('Explores who lives in CDMS')
console.log(explorerCDMX)
// Obtén la suma de todos los exercises_completed, usa REDUCE
const exercises_completed = explorers.reduce((acc, exercises) => acc + exercises.exercises_completed, 0)
console.log('Exercises completed:' +  exercises_completed)
// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
let  exercisesFinished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished)
console.log('Exercises Finished Fronted:' +  exercisesFinished)
// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
exercisesFinished = explorers.every(explorer => explorer.missions.onboarding.exercisesFinished)
console.log('Exercises Finished Onboarding:' +  exercisesFinished)
