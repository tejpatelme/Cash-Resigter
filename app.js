var billamount = document.querySelector("#billAmt");
var cashamount = document.querySelector("#cashAmt");
var button = document.querySelector("#button");

var notes = [2000,500,100,20,10,5,1];
var difference = 0;
var result = "";

function clickHandler() {   
    difference = cashamount.value - billamount.value;
    console.log(difference);
    for(var i =0; notes.length; i++){
        if(difference > notes[i]){
            result = notes[i] + ",";
        }
    }
    console.log("working");
}



button.addEventListener('click', clickHandler);