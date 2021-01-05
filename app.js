var billamount = document.querySelector("#billAmt");
var cashamount = document.querySelector("#cashAmt");
var button = document.querySelector("#button");
var nextbutton = document.querySelector("#nextbtn");
var cashamountdiv = document.querySelector(".cashamtdiv");
var output = document.querySelector(".output");
var outputDiv = document.querySelector(".outputdiv");
var cell1 = document.querySelector(".cell1");
var cell2 = document.querySelector(".cell2");


var notes = [2000,500,100,20,10,5,1];

function generateTable(note,noofnotes){
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = noofnotes;
    td2.innerHTML = note;
    cell1.appendChild(td1);
    cell2.appendChild(td2);
}

function calculatenotes(note,balance){
    var noofnotes = Math.floor(balance/note);
    console.log(note, noofnotes);
    if (noofnotes >= 1) {
        balance = balance - noofnotes*note;
        console.log("balance ", balance);
        generateTable(note,noofnotes);
    }
    return balance;
}

function showInput(){
    if(Number.isInteger(Number(billamount.value))>0){
        cashamountdiv.style.display = "block";
    }
    else {
        alert("enter a valid amount");
    }
    
}

function clickHandler() {  
    // cell1.innerHTML = "";
    // cell2.innerHTML = "";
    var inputamount = parseInt(billamount.value);
    var cashpaid = parseInt(cashamount.value);
    var difference = cashpaid - inputamount;
    outputDiv.style.display = "block";
    for(var i = 0 ; i < notes.length ; i++){
        if(difference>0){
            difference = calculatenotes(notes[i],difference);
        }
    }   
}

nextbutton.addEventListener('click', showInput);
button.addEventListener('click', clickHandler);