<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

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
  document.getElementById("q2answer").innerHTML = txt;
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
