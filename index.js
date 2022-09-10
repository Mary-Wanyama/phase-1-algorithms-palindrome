function isPalindrome(word) {
  let drow = word.length
  for (let i = 0; i < word.length/2; i++) {
    if (word[i] !== word[drow-1-i]) {
      return false
    }
    else{
      return true
    }
  }

}
  // Write your algorithm here
  // write a function that with an arguement.
  // compare the arguement to see if it is a palindrome. 
  // if the passed arguement is a pallindrome, return true.

  // test code

//   const string = ''
//   if (string[string.length-1] !== string[0]){
//     return false
//   }
//   else([string.length/2 -1]!==string[string.length/2 + 1]){
//     return false
//   }
//   else{
//     return true
//   }
// }

/* 
  Add your pseudocode here
  initialize an empty string
  write a condition that compare char within the string using indices
  return true for equal values and false for none equal values

*/

/*
  Add written explanation of your solution here
  [string.length-1] will be used to identify the last char in the string. 
  [0] will be the one to identify the first char.
  comapring the two and bringing true should make the
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
