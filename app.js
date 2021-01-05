var billamount = document.querySelector("#billAmt");
var cashamount = document.querySelector("#cashAmt");
var button = document.querySelector("#button");
var nextbutton = document.querySelector("#nextbtn");
var cashamountdiv = document.querySelector(".cashamtdiv");
var output = document.querySelector(".output");
var outputDiv = document.querySelector(".outputdiv");
var cell1 = document.querySelector(".cell1");
var cell2 = document.querySelector(".cell2");
var message = document.querySelector(".message");

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
        hidemessage();
        cashamountdiv.style.display = "block";
    }
    else {
        showmessage("Please enter a valid amount");
    }
    
}

function showmessage(text){
    message.style.display = "block";
    message.innerHTML = text;
    outputDiv.style.display = "none";
}

function hidemessage() {
    message.style.display = "none";
}

function clickHandler() {  
    var inputamount = parseInt(billamount.value);
    var cashpaid = parseInt(cashamount.value);
    var difference = cashpaid - inputamount;
    if(cashpaid===0){
        showmessage("Please enter an amount greater than zero");
    }
    else if(cashpaid < inputamount) {
        showmessage("Cash paid can't be less than bill amount");
    }
    else {
        if(inputamount === cashpaid){
            showmessage("No cash needs to be returned");
        }
        else {
            hidemessage();
            outputDiv.style.display = "block";
            for (var i = 0; i < notes.length; i++) {
                if (difference > 0) {
                    difference = calculatenotes(notes[i], difference);
                }
            }
    }
    }
}

nextbutton.addEventListener('click', showInput);
button.addEventListener('click', clickHandler);