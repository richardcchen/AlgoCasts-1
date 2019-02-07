// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const tracker = {}
  for (let char of str){
    if (tracker[char]){
      tracker[char]++
    } else {
      tracker[char] = 1
    }
  }
  let highestNum = 0
  let highestLetter = ''
  for (let letter in tracker){
    if (tracker[letter] > highestNum){
      highestNum = tracker[letter]
      highestLetter = letter
    }
  }
  return highestLetter
}

module.exports = maxChar;
