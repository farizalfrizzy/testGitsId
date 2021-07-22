let word = prompt('masukan kata : ');
let palindromeCheck = (inWord) => {
  //   inWord = inWord.toLowerCase();
  for (let i = 0; i < inWord.length; i += 1) {
    if (inWord[i] !== inWord[inWord.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
alert(palindromeCheck(word));
