//function to reverse the word
function revWord(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  //Test the reverse-form of a word if is to equal the original word
    if (word===revWord(word)) {
      return true;
    } else {
      return false;
    }

}

/* 
  Add your pseudocode here
  split the string elements
  re-arrange the elements from the last to first
  join the elements to form a new word
  compare the word to its reverse form using if
  return the result
 
*/

/*
  Add written explanation of your solution here
  First I create and function which splits the passed word into elements,
  Re-arrange the elements and form new joint-created word
  Using the isPalindrome function to compare the reversed_form to original form and return the result
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
