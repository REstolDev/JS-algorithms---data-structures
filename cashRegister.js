function checkCashRegister(price, cash, cid) {

  const totalCID = Number(cid.reduce((accumulator, item) => accumulator + item[1], 0).toFixed(2));
  let totalChange = cash - price;
  let change = [];
  const currency = {
          "ONE HUNDRED" : 100,
          TWENTY : 20,
          TEN : 10,
          FIVE : 5,
          ONE : 1,
          QUARTER: 0.25,
          DIME: 0.1 ,
          NICKEL : 0.05,
          PENNY : 0.01,
      } 
  let i = 8;
  let newElementExist = false;

  
  if (totalCID === totalChange) return {status: "CLOSED", change : cid};
  
  if (totalCID < totalChange) return {status: "INSUFFICIENT_FUNDS", change: []};
  

  for ( const propiedad in currency){
          if(currency.hasOwnProperty(propiedad)){
            
              while(cid[i][1] > 0 && currency[propiedad] <= totalChange){
                if (!newElementExist){
                   change.push([cid[i][0], 0]);
                   newElementExist =true;
                }
                
                change[change.length-1][1] += currency[propiedad];
                
                totalChange=Number((totalChange -currency[propiedad]).toFixed(2));
                cid[i][1] -= currency[propiedad];
              }
            
            newElementExist = false;
            i--;
          }
        }
    
    if(!totalChange) return {status:"OPEN", change: change} ;
    else  return {status: "INSUFFICIENT_FUNDS", change: []} ;
    
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])