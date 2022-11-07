//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)

validAnagram = (word1, word2) => {
    
    if (word1.length == word2.length) {
        for (let i = 0; i < word1.length; i++) {
            if(!word2.includes(word1[i])){
                console.log("false");
                return false;            
            }  
        }
        console.log("true");
        return true;
    }
    else{
        console.log("false by size");
        return false;
    }
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram("mats","smash") // false) // false

