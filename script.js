/* One NY Questions */
function question1(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;

  if (answer === correct) {
    alert("Wow! That's our favorite book too!");

  }    else {
      inputEl.parentNode.className = "";
    }
  }

/* Short Answer */

function shortAnswer1() {
  var txt;
  var answer = prompt(
    "Tell us about books?"
  );
  if (answer == null || answer == "") {
    txt = "Please enter your answer.";
  } else {
    txt = "Your answer is: " + answer;
  }
  document.getElementById("q3answer").innerHTML = txt;
}

/* Fav Books List */

function bookList() {
    var x = document.getElementById("bookForm");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x.elements[i].value + "<br>";
    }
    document.getElementById("favBooks").innerHTML = txt;
}

/* Submit All */

function submit() {
  var submitTxt;
  var confirm = document.getElementById("confirmTerms").checked;
  if (confirm == true) {
    submitTxt = "Submitted!";
  } else {
    submitTxt =
      "Please agree to the terms and conditions.";
  }
  document.getElementById("submitTxt").innerHTML = (submitTxt);
}
