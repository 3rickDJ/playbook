const Repo = {
  name: 'Playbook',
  author: '3rickDJ',
  language: 'English',
  numberOfCommits: 80,
  stars: 8,
  forks: 800,
  issues_open: 10,
  issues_close: 15,
  getTotalIssues: function(){
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function(){
    return `[General info] :  ${this.name} repository, created by ${this.author}. Developed in ${this.language} has a total of ${this.numberOfCommits} commits. ${this.stars} stars. Has been forked ${this.forks} times.`
  }
}

console.log('Name of repo:' + Repo.name)
console.log(Repo)
console.log('Total issues' +Repo.getTotalIssues())
console.log(Repo.getGeneralInfo())
