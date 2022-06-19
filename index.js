
function reverse(word){
  const wordArray = word.split("");
  const reverseWordArray = wordArray.reverse();
  const reverseWord = reverseWordArray.join("");
  return reverseWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverse(word); 
  if (word ===reverseWord){
    return true;
  } else {
    return false;
  }

}

    // reverse the input string

    // if the reversed string is the same as the input
  
  
    // create an array from the input string
    // reverse the array
  
    // create a string from the reversed array

    // return the reversed string
    



/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
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
