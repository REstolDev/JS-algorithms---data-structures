// function convertToRoman(num) {
//     let invertedNum = num.toString().split('').reverse();
//     let romanTens='';
//     let romanHundreds='';
//     let romanThousands=''; 

//     let romanOnes=convertSingleNumtoRoman(invertedNum[0],'I','V','X');

//     if(invertedNum.length>1)  romanTens=convertSingleNumtoRoman(invertedNum[1],'X','L','C') ;
//     if(invertedNum.length>2) romanHundreds=convertSingleNumtoRoman(invertedNum[2],'C','D','M');

//     if(invertedNum.length>3)
//     {
//          for(let i=1;i<=invertedNum[3];i++)romanThousands += 'M';
//     }
    

//      return romanThousands+romanHundreds+romanTens+romanOnes;
//     }
    

// const convertSingleNumtoRoman = (num, romanLetter1, romanLetter2, romanLetter3) =>{
//     switch(num){
//         case '0' : return '';
//         case '1': return romanLetter1 ;
//         case '2': return romanLetter1+romanLetter1;
//         case '3': return romanLetter1+romanLetter1+romanLetter1;
//         case '4': return romanLetter1+romanLetter2;
//         case '5': return romanLetter2;
//         case '6': return romanLetter2+romanLetter1;
//         case '7': return romanLetter2+romanLetter1+romanLetter1;
//         case '8': return romanLetter2+romanLetter1+romanLetter1+romanLetter1;
//         case '9': return romanLetter1+romanLetter3;
//     }
// }
//     convertToRoman(2000);
function convertirANumerosRomanos(numero) {
    if (typeof numero !== 'number' || numero < 1 || numero > 3999) {
      return 'Número no válido';
    }
  
    const valoresRomanos = [
      { valor: 1000, letra: 'M' },
      { valor: 900, letra: 'CM' },
      { valor: 500, letra: 'D' },
      { valor: 400, letra: 'CD' },
      { valor: 100, letra: 'C' },
      { valor: 90, letra: 'XC' },
      { valor: 50, letra: 'L' },
      { valor: 40, letra: 'XL' },
      { valor: 10, letra: 'X' },
      { valor: 9, letra: 'IX' },
      { valor: 5, letra: 'V' },
      { valor: 4, letra: 'IV' },
      { valor: 1, letra: 'I' }
    ];
  
    let resultado = '';
  
    for (const parValorLetra of valoresRomanos) {
      while (numero >= parValorLetra.valor) {
        console.log(numero,parValorLetra.valor,parValorLetra.letra);
        
        resultado += parValorLetra.letra;
        numero -= parValorLetra.valor;
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  console.log(convertirANumerosRomanos(354)); // Debería mostrar "CCCLIV"
  console.log(convertirANumerosRomanos(1987)); // Debería mostrar "MCMLXXXVII"
  
  
  
  
  
  