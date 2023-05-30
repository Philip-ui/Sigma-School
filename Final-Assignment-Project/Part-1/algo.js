// 1. Reverse A String Using Loops.

function reverseAlpabets(str) {
    return str.split('').reverse().join('');
  }
  // reverse('abcde') == 'edcba'
  console.log(reverseAlpabets('abcde') == 'edcba' );
  // reverse('hello') == 'olleh'
  console.log(reverseAlpabets('hello') == 'olleh' );
  // reverse('Greetings from The Hacker Collective') == 'evitcelloC rekcaH ehT morf sgniteerG'
  console.log(reverseAlpabets('Greetings from The Hacker Collective') == 'evitcelloC rekcaH ehT morf sgniteerG' );

// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.
  function sameBackAndForth(stringAny) {
    const reversedStr = stringAny.split('').reverse().join('');
    return stringAny === reversedStr;
  }
  
  console.log(sameBackAndForth("abba")); // true
  console.log(sameBackAndForth("abcdefg")); // false

// 3. Given an integer, return an integer that is the reverse ordering of numbers.
  function reverseInt(number) {
    const reversed = parseInt(Math.abs(number).toString().split('').reverse().join(''), 10);
    return reversed * Math.sign(number);
  }
  
  console.log(reverseInt(15));   // Output: 51
  console.log(reverseInt(981));  // Output: 189
  console.log(reverseInt(500));  // Output: 5
  console.log(reverseInt(-15));  // Output: -51
  console.log(reverseInt(-90));  // Output: -9

// 4. SumArr - Find the sum of all items in an array, using loops.
function sumArr(arrayNum) {
    let sum = 0;
    for (let i = 0; i < arrayNum.length; i++) {
      sum += arrayNum[i];
    }
    return sum;
  }

console.log(sumArr([1, 2, 3, 4, 5]));          // Output: 15
console.log(sumArr([1000, 2000, 44, 55, 22])); // Output: 3121
console.log(sumArr([123, 456, 789]));          // Output: 1368

// 5. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)
function deafGrandma(strWords) {    
    const sentenceWords = strWords.split(" ");    
    const shoutedWords = sentenceWords.map((sentenceWord) => sentenceWord.toUpperCase() + "!!");    
    const shoutedSentence = shoutedWords.join(" ");  
    return shoutedSentence;  }

  console.log(deafGrandma("I have a bad feeling about this") == "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!" );

// 6. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
function whatIsMissing(str) {
    for (let i = 0; i < str.length - 1; i++) {
      const presentCharCode = str.charCodeAt(i);
      const anotherCharCode = str.charCodeAt(i + 1);
      if (anotherCharCode - presentCharCode > 1) {
        return String.fromCharCode(presentCharCode + 1);
      }
    }
    return undefined;
  }

console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz")); // undefined
console.log(whatIsMissing("bcdf")); // 'e'
console.log(whatIsMissing("abcdefghjklmno")); // 'i'

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.
function swap(str, begin, final) {    
    if (str.indexOf(begin) === -1) {
      return str;
    }     
    const index = str.indexOf(begin);    
    const initialLetterCase = begin[0].toUpperCase() === begin[0] ? final[0].toUpperCase() : final[0].toLowerCase();
    const newStr = str.slice(0, index) + initialLetterCase + final.slice(1) + str.slice(index + begin.length);    
    return newStr;
  }
  
  console.log(swap("His name is Tom", "Tom", "john")); // Output: "His name is John"
  console.log(swap("Let us get back to more Coding", "Coding", "algorithms")); // Output: "Let us get back to more Algorithms"
  console.log(swap("This has a spellngi error", "spellngi", "spelling")); // Output: "This has a spelling error"