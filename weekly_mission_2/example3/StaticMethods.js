class ToolBox {
  static getMostUsefulTools(){
    return ['Command line', 'git', 'Text Editor']
  }
}

console.log('Example 8: Static methods')
//it is inherent to its class, is not a method of a object
console.log(ToolBox.getMostUsefulTools())
