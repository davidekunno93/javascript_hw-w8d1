/*
CODEWARS QUESTIONS

Question 1
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
    let ans = 0
    let d = {}
    for (char of text){
      if (!Object.keys(d).includes(char.toLowerCase())){
        d[char.toLowerCase()] = 1
      } else {
        d[char.toLowerCase()]++
      }   
    }
    for (const value of Object.values(d)){
        if (value > 1){
            ans++
        }
    }
    return ans
  }


/*
Question 2
The goal of this exercise is to convert a string to a new string where each character in the new string 
is "(" if that character appears only once in the original string, or ")" if that character appears more 
than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  let ans = ""
  let d = {}
  for (char of word){
    if (!Object.keys(d).includes(char.toLowerCase())){
      d[char.toLowerCase()] = 1
      console.log(char)
    } else {
      d[char.toLowerCase()]++
      console.log("duplicate")
    }
  }

  for (char of word){
    if (d[char.toLowerCase()] === 1){
      ans = ans+"("
    } else {
      ans = ans+")"
    }
  }
  
  return ans
};

