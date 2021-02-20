const billamount = document.querySelector("#billAmt");
const cashamount = document.querySelector("#cashAmt");
const button = document.querySelector("#button");
const nextbutton = document.querySelector("#nextbtn");
const cashamountdiv = document.querySelector(".cashamtdiv");
const outputDiv = document.querySelector(".outputdiv");
const output = document.querySelector(".output");
const cell1 = document.querySelector(".cell1");
const cell2 = document.querySelector(".cell2");
const message = document.querySelector(".message");

const notes = [2000,500,100,20,10,5,1];
let click = 1;

//Function to dynamically generate table of notes
function generateTable(note,noofnotes){
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerHTML = noofnotes;
    td2.innerHTML = note;
    cell1.appendChild(td1);
    cell2.appendChild(td2);
}

//Function to calcualte number of notes
function calculateNotes(note,balance){
    const noofnotes = Math.floor(balance/note);
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
        hideMessage();
        cashamountdiv.style.display = "block";
    }
    else {
        showMessage("Please enter a valid amount");
    }
    
}

//Function used to show messages to user
function showMessage(text){
    message.style.display = "block";
    message.innerHTML = text;
    outputDiv.style.display = "none";
}

//Function to hide message
function hideMessage() {
    message.style.display = "none";
}


//Function that gets executed after calculate button is clicked
function clickHandler() {  
    console.log(click);
    //Condition to check of calculate button is pressed again without refreshing the page
    //If it is then delete the cells of the table
    if(click > 1) {
        const cell1len = cell1.cells.length;
        const cell2len = cell2.cells.length;
        for(let i = 0; i < cell1len -1 ; i++){
            cell1.cells[1].remove();
        }
        for(let i = 0; i < cell2len - 1; i++){
            cell2.cells[1].remove();
        }
    }
    
    if(Number(cashamount.value)>0 && Number.isInteger(Number(cashamount.value))  && billamount.value != ""){
        const inputamount = parseInt(billamount.value);
        const cashpaid = parseInt(cashamount.value);
        let difference = cashpaid - inputamount;
        if(cashpaid < inputamount) {
            showMessage("Cash paid can't be less than bill amount");
        }
        else {
            if(inputamount === cashpaid){
                showMessage("No cash needs to be returned");
            }
            else {
                hideMessage();
                outputDiv.style.display = "block";
                for (let i = 0; i < notes.length; i++) {
                    if (difference > 0) {
                        difference = calculateNotes(notes[i], difference);
                    }
                }
        }
        }
    }
    else {
        showMessage("Please enter a valid amount");
    }

    click++;
}

nextbutton.addEventListener('click', showInput);
button.addEventListener('click', clickHandler);