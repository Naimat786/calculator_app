// Calculator Assignment # 07 //

function getNum(num){
    var change = document.getElementById('change');
    change.innerHTML += num
    return change.innerHTML;
}
function getResult(){
    var result = document.getElementById('result');
    var change = document.getElementById('change').innerHTML;
    if(change == ""){
        alert("Please Do Some Calculations!")
    }else{
        result.value = eval(change)
    }
}
function reset(){
 document.getElementById('change').innerHTML = ""
 document.getElementById('result').value = "";
}














