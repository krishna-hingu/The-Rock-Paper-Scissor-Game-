let userScore = 0;
let compScore = 0;

// [accessing userChoices]
let choices = document.querySelectorAll(".choices");
console.log(choices);

// [accessing msg box ]
let msg = document.querySelector("#msg");
console.log(msg);

// accessing comp-score and user-score
let compScoreEl = document.querySelector("#comp-score");
let userScoreEl = document.querySelector("#user-score");

// [userChoice]
//made loop to go on each userChoice and added event click
//to know user clicked on option based on the id
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// [generating random computer choice]
const genCompChoice = () => {
  option = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

// game draw funtion
const draw = () => {
  console.log("Draw!!");
  msg.innerText = "Draw!!";
  msg.style.backgroundColor = "#dda15e";
};

// game will run based on computer generated and userChoices
// comparing both comp and userChoice
// taking userChoice as parameter from choice
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("comChoice:", compChoice);
  console.log("userChoice:", userChoice);

  let userWin = true; //assumimg
  if (userChoice === compChoice) {
    draw();
  } else if (userChoice === "rock") {
    // scissor | paper
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    // rock | scissor
    userWin = compChoice === "scissor" ? false : true;
  } else {
    //rock | paper
    userWin = compChoice === "rock" ? false : true;
  }

  // show winner function taking userWin from playGame as parameter
  const showWinner = (userWin, userChoice, compChoice) => {
    // if userWin is true than
    if (userWin) {
      msg.innerText = `You Win!! your ${userChoice} beats ${compChoice}!!`;
      msg.style.backgroundColor = "green";
      userScore++;
      userScoreEl.innerText = userScore;
    } else {
      //else
      console.log("You loss!!");
      msg.innerText = `You loss!! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
      compScore++;

      compScoreEl.innerText = compScore;
    }
  };

  //code should not override on draw function
  //if not use than text stuck on you win rather than draw text
  if (userChoice !== compChoice) {
    showWinner(userWin, userChoice, compChoice);
  } else {
    draw();
  }
};
