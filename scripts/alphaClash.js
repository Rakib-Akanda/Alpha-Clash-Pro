// function play(){
//     // step-1 : hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('playground-screen');
//     playgroundSection.classList.remove('hidden');
// }


// main function here
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  //   console.log("Player pressed", playerPressed);

  // Stop the game if pressed "Esc"
  if (playerPressed === "Escape") {
    gameOver();
  }
  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //   console.log(playerPressed, expectedAlphabet);

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    // console.log("You got a point");
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementById("current-score", updatedScore);

    //----------------------------------------
    // // update score
    // //1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // const currentScore = getTextElementValueById('current-score');

    // //2. increase the score by 1
    // const newScore = currentScore + 1;
    // //3. show the updated score
    // currentScoreElement.innerText = newScore;

    // // start new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updateLife = currentLife - 1;
    setTextElementById("current-life", updateLife);
    if (updateLife === 0) {
      gameOver();
    }
    // -----------------------------------------
    // console.log('You missed. You lost a life');
    // step-1:get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // step-2: minus the life count
    // const newLife = currentLife - 1;
    // // step-3: display the updated life count
    // currentLifeElement.innerText = newLife;
  }
}

// capture keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);


function continueGame() {
  // step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log("Your random alphabet", alphabet);
  // set the generate alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  // Set background color
  setBackgroundColorById(alphabet);
}

function play() {
  // hide everything show only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("playground-screen");
  // reset and life
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);
  continueGame();
}
function gameOver() {
  hideElementById("playground-screen");
  showElementById("final-score");
  //update final score.
  //1. get the last score
  const lastScore = getTextElementValueById("current-score");
  setTextElementById("last-score", lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  //   console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}
