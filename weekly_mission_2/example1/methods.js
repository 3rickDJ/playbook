const spaceShip = {
  title: 'FatOne',
  aceleration: 12,
  timeHRS : 1000,
  speedKH: 20,
  distance: function() {
    return this.speedKH*this.timeHRS+1/2*this.aceleration*this.timeHRS*this.timeHRS
  }
}
console.log('Objeto con función')
console.log(`[Distance travelled] ${spaceShip.distance()} kilometers!`)
