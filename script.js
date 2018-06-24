var bookmarkInfo = []

/* One NY Questions */
function question1(e) {
  let inputEl = e.currentTarget;
  let answer = inputEl.value;
  let correct = inputEl.dataset.correct;

  if (answer === correct) {
     alert("Wow! That's our favorite book too!")
     /*bookmarkInfo.push("inputEl.value");*/
     document.getElementById("radio1").innerHTML = inputEl.value;
   }  else {
    alert("Wow - we're glad you've read it")
        /*bookmarkInfo.push("inputEl.value");*/
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
  /*bookmarkInfo.push(txt);*/
  /*document.getElementById("favQuote").innerHTML = txt;*/
}

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
  /*bookmarkInfo.push(txt);*/
  /*
  document.getElementById("favSummary").innerHTML = txt;*/
}

/* Fav Books List */

function bookList() {
    var x = document.getElementById("bookForm");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x.elements[i].value + "<br>";
    }
    /*bookmarkInfo.push(txt);*/
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
  document.getElementById("bookmarkInfo").innerHTML = bookmarkInfo;
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
