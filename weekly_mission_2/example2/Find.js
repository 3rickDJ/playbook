const bins  = [24, 22, 19, 25, 32, 35, 18]
const binLowest= bins.find((bin) => bin < 10)
if(binLowest == undefined) {
  console.log('The value could not be found')
} else {
  console.log('First age under 10 years: ' + binLowest)
}
const scores = [
  { name: 'A', score: 95 },
  { name: 'M', score: 80 },
  { name: 'E', score: 150 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const score_more_than_99 = scores.find((user) => user.score > 99)
console.log('Score found:' + score_more_than_99.name)

const names13 = ['Explorer 1', 'Explorer 2', 'Explorer o 3']
const result = names13.findIndex((name) => name.length > 10)
console.log('First element wich length is bigger than 10: '+ result)
