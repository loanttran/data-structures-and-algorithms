/* write a function that checks if one word is an anagram of another */ 

// solution 1
function validAnagram(word1, word2) {
    // check if the two words are of the same length
    if (word1.length !== word2.length) {
        return false; 
    }

    // make objects out of word1 and word2
    let freCounter1 = {};
    let freCounter2 = {}; 

    for (let each of word1) {
        freCounter1[each] = (freCounter1[each] || 0) + 1;
    }

    for (let each of word2) {
        freCounter2[each] = (freCounter2[each] || 0) + 1; 
    }

//     console.log(freCounter1);
//     console.log(freCounter2); 


    for (let key in freCounter1) {
        // check if a char in word1 is also in word2
        if (!(key in freCounter2)) {
            return false; 
        }

        // check if frequency of a char in word1 is also the same in word2  
        if (freCounter1[key] !== freCounter2[key]) {
            return false; 
        }
    }

    return true; 
}

// solution 2
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    
    // turn first into a frequency object
    const lookup = {};

    for (let i=0; i<first.length; i++) {
        let letter = first[i]; 
        // if letter exists in lookup, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
    }
    console.log(lookup); 

    for (let i=0; i<second.length; i++) {
        let letter = second[i]; 
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            // if the letter is in lookup, minus 1 in frequency
            lookup[letter] -= 1;
        }
    } 
    return true; 
}

// here you only need to turn one input into a frequency object because you can
// just input the letter in the second input into the object and check

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('texttwisttime', 'timetwisttext'); // true
validAnagram('cinema', 'iceman'); // true