class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
    return this.name
  }
}

console.log('Ejemplo  9: Herencia entre dos clases')
const erickDev = new Developer('Erick', 'js', ['Python', 'C' ])
console.log(erickDev)
console.log(erickDev.getName)
//Note: getName is not a function by itself, is an attribute of object erickDev

// we can use 'extends' to use the parents properties
class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent('Carlo', 'js', ['elixir', 'groovy', 'lisp'])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
