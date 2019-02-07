// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
//
// function reverse(str){
//   let newWord = ''
//   for (let char of str){
//     newWord = char + newWord
//   }
//   return newWord
// }

function reverse(str){
  return str.split('').reduce((reduced, char) => {
    return char + reduced
  }, '')
  
}


module.exports = reverse;
