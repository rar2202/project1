/* One NY Questions */
function question1(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;

  if (answer === correct) {
    alert("Wow! That's our favorite book too!")
    document.getElementById("radio1").innerHTML = "Ask me about " + inputEl.value + "!";
  } else {
    alert("Wow - we're glad you've read it")
    document.getElementById("radio1").innerHTML = "Ask me about " + inputEl.value + "!";
  }
}

/* Short Answer - Index*/
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
  document.getElementById("favQuote").innerHTML = "My favorite literary quote is '" + txt + "'.";
}

/* Short Answer - Page 2/3/4*/
function shortAnswer3() {
  var txt;
  var answer = prompt(
    "Provide your book feedback."
  );
  if (answer == null || answer == "") {
    txt = "Please share your feedback.";
  } else {
    txt = "Thank you! Your feedback is greatly appreciated!";
  }
  document.getElementById("feedback1").innerHTML = txt;
}

/* Short Answers - Page 5*/
function shortAnswer5() {
  var txt;
  var answer = prompt(
    "Provide the title of the book you are reviewing:"
  );
  if (answer == null || answer == "") {
    txt = "Please provide the book title.";
  } else {
    txt = answer;
  }
  document.getElementById("bookTitle").innerHTML = txt;
}

function updateImage() {
  let url = document.querySelector('#imageURLInput').value;
  document.querySelector('#bookImage').src = url;
}

function updateVideo() {
  let url = document.querySelector('#videoURLInput').value;
  document.querySelector('#videoURL').src = url;
}

/* Fav Books List */
function bookList() {
  var x = document.getElementById("bookForm");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + x.elements[i].value + "<br>";
  }
  document.getElementById("favBooks").innerHTML = "I highly recommend " + "\n" + txt;
}

/* Write your Own Summary Functions*/
function shortAnswer2() {
  var txt;
  var answer = prompt(
    "Write a brief summary of your favorite story: "
  );
  if (answer == null || answer == "") {
    txt = "Please write your summary here";
  } else {
    txt = answer;
  }
  document.getElementById("favSummary").innerHTML = txt;
}

/* Americanah Question (4)*/
function question4(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;

  if (answer === correct) {
    alert("Great! Tell us what you thought below!")
    document.getElementById("radio2").innerHTML = inputEl.value;
  } else {
    alert("Try it out - it's a great story!")
    document.getElementById("radio2").innerHTML = inputEl.value;
  }
}


/* Submit Bookmark and Name*/
function submit() {
  var txt;
  var confirm = document.getElementById("confirmTerms").checked;
  if (confirm == true) {
    txt = "Your bookmark is ready!";
  } else {
    txt =
      "Are you finished?";
  }
  alert(txt);
}

/*
  function color() {
    var txtcolor;
    inputEl = e.currentTarget;
    let txtcolor = inputEl.value;
    document.getElementById("bookmarktxt").style.color = txtcolor;
  }
