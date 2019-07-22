
/*
Available Telco's
*/
let telcos = {
  1:'MTN',
  2:'GLO',
  3:'AIRTEL',
  4:'9MOBILE'
}

/*
  Telco's Numbers
*/
let numbers = {
  '0703':1,
  '0706':1,
  '0803':1,
  '0806':1,
  '0810':1,
  '0813':1,
  '0814':1,
  '0816':1,
  '0903':1,
  '0906':1,
  '0705':2,
  '0805':2,
  '0807':2,
  '0811':2,
  '0815':2,
  '0905':2,
  '0701':3,
  '0708':3,
  '0802':3,
  '0808':3,
  '0812':3,
  '0901':3,
  '0902':3,
  '0907':3,
  '0817':4,
  '0818':4,
  '0809':4,
  '0908':4,
  '0909':4,
}
/*
  Async function to get digits
*/
async function getDigits(digit){
  if(digit.length >= 11){
    let network = await validateNetwork(digit);
    console.log(network);
  }
}

/*
  Function to validate and return the Network Provider
*/

function validateNetwork(value){
  let checks = '';
  if(value.startsWith('+234')){
    checks = value.slice(4,7);
  }else if(value.startsWith('234')){
    checks = value.slice(3,6);
  }
  else{
    checks = value.slice(1,4);
  }
  let numKeys = Object.keys(numbers);
  let result = '';
  numKeys.find((elm)=>{
    if(elm.slice(1) == checks){
      result += numbers[elm];
    }

  })
if(result !== ''){
  return telcos[result];
}else{
  return 'Not Found!!';
}

}

getDigits('+23490900056744');//function called passing digits to it
