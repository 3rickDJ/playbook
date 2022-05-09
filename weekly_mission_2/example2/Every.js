const planets = ['Earth', 'Venus', 'Mars', 'Jupiter', 'Mercury', 'Saturn', 'Uranus']
const planetsNameLen = planets.every((planet) => typeof planet === 'string')
console.log('Every planet is defined as a String of characters:' + planetsNameLen )
