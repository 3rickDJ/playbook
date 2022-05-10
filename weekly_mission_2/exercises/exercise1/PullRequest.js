const PR = {
  title: 'typo: README statements',
  author: '3rickDJ',
  branchName:  'main',
  dateCreated: '05/05/22',
  status: 'rejected',
  repositoryNameAssociated: 'playbook',
  getStatus: function(){
    return this.status
  },
  getTitleAndAuthor(){
    return ` ${this.title} created by ${this.author}`
  }
}

console.log(PR)
console.log(PR.getTitleAndAuthor())
console.log('Status:' + PR.getStatus())
