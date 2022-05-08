const subway = {
  size: 'large',
  bread: 'roasted honey',
  pickles: true,
  dressings:['onion', 'BBQ', 'schezwan sauce', 'none', 'ranch'],
  changeOrder: function(size, bread, pickles, dressings){
    this.size = size
    this.bread = bread
    this.pickles = pickles
    this.dressings = dressings
    return this
  }
}
console.log('Objeto que recibe parámetros')
console.log(subway)
console.log(subway.changeOrder('small', 'dehydrated garlic', false, ['none']))
