//convertToArray() take a string number and convert it into an array of numbers
const convertToArray=(str)=>{
  let arrNumbers=str.split('').map(x=>parseInt(x));
  return arrNumbers;
}

//determine the length of the array, if it has only 1 digit: jumping!, in other cases, I'll study it

const jumping=(arr)=>{
  if(arr.length==1){
    return 'Jumping!!'
  }else if(arr.length==2){
    if(Math.abs(arr[0]-arr[1])==1){
      return 'Jumping!!'
    }else{
      return 'Not!!'
    }
  }else if(arr.length>2){
    let counter=1; while(((Math.abs(arr[counter]-arr[counter-1]))==1)&&((Math.abs(arr[counter]-arr[counter+1]))==1)){
counter++
}
return (counter==arr.length-1)?'Jumping!!':'Not!!';
}
}

//special format

const format=()=>{
if(document.getElementById('resultInDom').innerHTML==="Not!!"){
  document.getElementById('resultInDom').style.color="red";
}else if(document.getElementById('resultInDom').innerHTML==="Jumping!!"){
  document.getElementById('resultInDom').style.color="green";
};
};


const executeJumpingTest=()=>{
  const userNumberString=document.getElementById('introNumber').value;
  const result=jumping(convertToArray(userNumberString));
  document.getElementById('resultInDom').innerHTML=result;
  format();
}


// solucionar: