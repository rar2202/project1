/* One NY Questions */
function question1(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;

  if (answer === correct) {
     alert("Wow! That's our favorite book too!")
     document.getElementById("radio1").innerHTML = inputEl.value;
   }  else {
    alert("Wow - we're glad you've read it")
       document.getElementById("radio1").innerHTML = inputEl.value;
    }
  }

/* Short Answer */

function shortAnswer1() {
  var txt;
  var answer = prompt(
    "A favorite quote for your bookmark: "
  );
  if (answer == null || answer == "") {
    txt = "Put your favorite quote here!";
  } else {
    txt = answer;
  }
  document.getElementById("favQuote").innerHTML = txt;
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
    submitTxt = "Submitted. Your bookmark is ready!";
  } else {
    submitTxt =
      "Are you sure you're finished?";
  }
  alert(submitTxt);
}

/* Americanah Question (4)*/
function question4(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;

  if (answer === correct) {
     alert("Great! Tell us what you thought below!")
     document.getElementById("radio2").innerHTML = inputEl.value;
   }  else {
      alert ("Try it out - it's a great story!")
      document.getElementById("radio2").innerHTML = inputEl.value;
    }
  }
