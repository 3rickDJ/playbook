class Repository {
  constructor( name, author, language, stars, forks){
    this.name = name
    this.author = author
    this.language = language
    this.stars = stars
    this.forks = forks
  }
  getInfo(){
    return `Repository ${this.name} has ${this.stars} stars, and has been forked ${this.forks} times`
  }
}

const playbook1 = new Repository('Playbook', 'Erick', 'English/Spanish', 20, 897)
console.log('Example 4: object methods')
console.log(playbook1)
