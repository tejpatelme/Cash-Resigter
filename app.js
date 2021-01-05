var billamount = document.querySelector("#billAmt");
var cashamount = document.querySelector("#cashAmt");
var button = document.querySelector("#button");
var nextbutton = document.querySelector("#nextbtn");
var cashamountdiv = document.querySelector(".cashamtdiv");
var outputDiv = document.querySelector(".outputdiv");
var output = document.querySelector(".output");
var cell1 = document.querySelector(".cell1");
var cell2 = document.querySelector(".cell2");
var message = document.querySelector(".message");

var notes = [2000,500,100,20,10,5,1];
var click = 1;

//Function to dynamically generate table of notes
function generateTable(note,noofnotes){
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = noofnotes;
    td2.innerHTML = note;
    cell1.appendChild(td1);
    cell2.appendChild(td2);
}

//Function to calcualte number of notes
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

//Function that gets executed when next button clicked
function showInput(){
    if(Number(billamount.value)>0 && Number.isInteger(Number(billamount.value))  && billamount.value != ""){
        hidemessage();
        cashamountdiv.style.display = "block";
    }
    else {
        showmessage("Please enter a valid amount");
    }
    
}

//Function used to show messages to user
function showmessage(text){
    message.style.display = "block";
    message.innerHTML = text;
    outputDiv.style.display = "none";
}

//Function to hide message
function hidemessage() {
    message.style.display = "none";
}


//Function that gets executed after calculate button is clicked
function clickHandler() {  
    console.log(click);
    //Condition to check of calculate button is pressed again without refreshing the page
    //If it is then delete the cells of the table
    if(click > 1) {
        var cell1len = cell1.cells.length;
        var cell2len = cell2.cells.length;
        for(var i = 0; i < cell1len -1 ; i++){
            cell1.cells[1].remove();
        }
        for(var i = 0; i < cell2len - 1; i++){
            cell2.cells[1].remove();
        }
    }
    
    if(Number(cashamount.value)>0 && Number.isInteger(Number(cashamount.value))  && billamount.value != ""){
        var inputamount = parseInt(billamount.value);
        var cashpaid = parseInt(cashamount.value);
        var difference = cashpaid - inputamount;
        if(cashpaid < inputamount) {
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
    else {
        showmessage("Please enter a valid amount");
    }

    click++;
}

nextbutton.addEventListener('click', showInput);
button.addEventListener('click', clickHandler);