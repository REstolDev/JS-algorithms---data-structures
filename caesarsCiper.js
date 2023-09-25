function rot13(str) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];

    let strArray = str.split('');
    //letter.indexOf();
    strArray = strArray.map((x) => {

      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === x) {
          let index = i;
          index = index < 13 ? index + 13 : index - 13;
          x = alphabet[index];
          break;
        };
      };
      return x;
    });
    str= strArray.join('');
    
    return str;
}
  
  rot13("SERR PBQR PNZC");
