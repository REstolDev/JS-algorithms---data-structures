function palindrome(str) {
    str = str.toLowerCase();
    console.log(str);
    const myRegex= /[a-z0-9]+/ig ;
    str = str.match(myRegex).join('');
    let strPal = str.split('').reverse().join('');
  
    console.log(str,strPal);
  
    return (str===strPal);
  }
  
  palindrome("My age is 0, 0 si ega ym.");