class PullRequest {
  constructor(repo, title, lines_changed){
    this.repo = repo
    this.title = title
    this.lines_change = lines_changed
    this.status = 'Open'
    this.dateCreated = new Date()
  }

  getInfo(){
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

console.log('Example 5: default properties')
const myPR1 = new PullRequest('LaunchX', 'My first PR', 100)
console.log(myPR1.getInfo())

console.log('Another object')
const myPR2 = new PullRequest('LaunchX', 'My second PR', 99)
console.log(myPR2.getInfo())
