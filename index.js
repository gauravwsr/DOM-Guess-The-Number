let GuessnumEl = document.getElementById("Guessnum");
let errormsgEl = document.getElementById("errormsg");

let randomVal;
let count = 1;

function resetValue(){    
    randomVal = Math.ceil(Math.random() * 100);
    console.log(randomVal);
}
resetValue();

function findnum() {

    let guessval = parseInt(GuessnumEl.value);
    console.log(guessval);
    if (guessval > randomVal) {
        errormsgEl.textContent = "Too high! Try again.";
        errormsgEl.style.color = "red";
        count++;
    } else if (guessval < randomVal) {
        errormsgEl.textContent = "Too low! Try again.";
        errormsgEl.style.color = "red";
        count++;
    } else if(guessval === randomVal) {
        errormsgEl.textContent = `Hurry You Win!! With ${count} attemts`;
        errormsgEl.style.color = "green";
    }else{
        errormsgEl.textContent = "Enter the Value!!";
    }
}

