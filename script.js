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

/* Submit All
*/

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
