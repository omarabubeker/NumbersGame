let msgOne = document.getElementById("msg1");
let msgTwo = document.getElementById("msg2");
let msgThree = document.getElementById("msg3");
let resultOne = Math.floor(Math.random() * 100 + 1);
let guesses = 0;
let guessed = [];

function play() {

    userguess = document.getElementById("guessinput").value;
    if ( userguess < 1 || userguess > 100) {
        alert("enter number between 1 - 100");
    }

    else {
        guessed.push(userguess);
        guesses = guesses + 1;
        if (userguess < resultOne) {
            msgOne.textContent ="Your number is too low";
            msgTwo.textContent ="Number of guesses " + guesses;
            msgThree.textContent = "Guessed numbers: " + guessed;
        }

        else if (userguess > resultOne) {
            msgOne.textContent ="Your number is too high";
            msgTwo.textContent ="Number of guesses " + guesses;
            msgThree.textContent = "Guessed numbers: " + guessed;
        }

        else if (userguess == resultOne) {
            msgOne.textContent ="Your won";
            msgTwo.textContent ="The number is " + resultOne;
            msgThree.textContent = "You guessed: " + guesses + " times";
        }

        else {
            msgThree.textContent = "Error: You need to enter a number "
        }
    }
    }
