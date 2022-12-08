function checkAlphabetVowelOrConsonant(letter){
    letter = letter.toLowerCase();
    switch(letter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return " Vowel";
        default:
            return " Consonant";
    }
}
