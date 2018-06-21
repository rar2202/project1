/* Correct/Incorrect Functions Question 1
*/

function wrong1() {
  alert("Try again!\nHint: How much water does this plant need per year?");
}

function right1() {
  alert(
    "That's right! This plant needs very little water and lots of sunlight, so an arid dry climate is perfect."
  );
}

/* Correct/Incorrect Functions Question 2
*/

function question2(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;
  
  if (answer !== correct) {
    alert("Try again.\nHint: What is the average temperature in this region?");
    
  }    else {
    console.log(inputEl)
      inputEl.parentNode.className = "q2correct radio-inline";
    }
  }

/*
function answer2q1() {
  document.getElementById("Q2correct1").className = "q2correct radio-inline";
}

function answer2q2() {
  document.getElementById("Q2correct2").className = "q2correct radio-inline";
}

function answer2q3() {
  document.getElementById("Q2correct3").className = "q2correct radio-inline";
}

function answer2q4() {
  document.getElementById("Q2correct4").className = "q2correct radio-inline";
}

function answer2q5() {
  document.getElementById("Q2correct5").className = "q2correct radio-inline";
}
*/
/* Short Answer Question 3
*/

function shortAnswer1() {
  var txt;
  var answer = prompt(
    "As the colors change, notice that the year counter at the top progresses from 2030 to 2100. Using your understanding of climate change, what is happening as the graph changes colors?"
  );
  if (answer == null || answer == "") {
    txt = "Please enter your answer.";
  } else {
    txt = "Your answer is: " + answer;
  }
  document.getElementById("q3answer").innerHTML = txt;
}

/* Short Answer Question 4
*/

function shortAnswer2() {
  var txt;
  var answer = prompt(
    "What do you notice about the vegetation and plant life in each climate zone? Why do these differences occur?"
  );
  if (answer == null || answer == "") {
    txt = "Please enter your answer.";
  } else {
    txt = "Your answer is: " + answer;
  }
  document.getElementById("q4answer").innerHTML = txt;
}

/* Question 5 Drop Down Alert
*/

function q5answer() {
  var ans = document.getElementById("q5select").value;
  document.getElementById("q5answertxt").innerHTML =
    "You answered " + ans + ". The correct answer is >150 ppm.";
}

/* Submit All
*/

function submit() {
  var txt;
  var confirm = document.getElementById("confirmWork").checked;
  if (confirm == true) {
    txt = "Great!";
  } else {
    txt =
      "Uh-oh, it looks like you don't feel confident with climate zones. Review this material before the next lesson.";
  }
  alert(txt);
}
