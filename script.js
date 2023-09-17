// display the numbers in textbox
 function displayNum(num){
   result.value+=num
 }
 
// clear the box
function clearnum(){
    result.value=''
}

// evaluvate expression
function evaluvatenum(){
    exp=result.value
    output=eval(exp)
    result.value=output

 // result.value=eval(result.value)
}

// remove one by one
function clearone(){
    result.value=result.value.slice(0,-1)
}