const Issue = {
  title: 'Fix: Bug nvim lsp.diagnostic deprecated',
  repositoryNameAssociated: 'Lsp diagnostic',
  status: 'Open',
  numberOfComments: 421,
  labels: ['Bug', 'Deprecated', 'nvim7.0'],
  author: 'nvim',
  dateCreated: new Date(),
  lastUpdated: '05/10/22',
  getTitleAndAuthor: function(){
    return `'${this.title}' issued by  ${this.author}`
  },
  getGeneralInfo: function(){
    let generalInfo = `Repository: ${this.repositoryNameAssociated} \nStatus: ${this.status}\nLabels: ${this.labels}`
    return generalInfo
  }
}
console.log(Issue)
console.log(Issue.getTitleAndAuthor())
console.log(Issue.getGeneralInfo())
