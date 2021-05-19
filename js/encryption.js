const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function codingCaesarCipher(shift, action, text) {
    let codingText = [];
    text.toString().split('').forEach((letter) => {
        let letterIndex = upperCaseAlphabet.indexOf(letter.toUpperCase());
        if (letterIndex < 0) {
            codingText.push(letter);
        } else {
            let newLetter = getCodingLetter(shift, action, letterIndex);
            codingText.push(letter == letter.toUpperCase() ? newLetter : newLetter.toLowerCase());
        }
    })
    return codingText.join('');
}

function getCodingLetter(shift, action, letterIndex) {
    let newLetterIndex = 0;
    if (action == 'decode') {
        newLetterIndex = (letterIndex - +shift) % upperCaseAlphabet.length;
    } else if (action == 'encode') {
        newLetterIndex = (letterIndex + +shift) % upperCaseAlphabet.length;
    } 
    if (newLetterIndex < 0) {
        newLetterIndex = upperCaseAlphabet.length + newLetterIndex;
    }
    newLetter = upperCaseAlphabet[newLetterIndex];
    return newLetter;
}

module.exports = {
    codingCaesarCipher: codingCaesarCipher,
    getCodingLetter: getCodingLetter
}