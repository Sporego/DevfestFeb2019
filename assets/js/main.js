// houdini()
// Makes Div Display and Hide Toggle

function houdini() {
  var x = document.getElementById("effortFilter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function changeImage() {
  var x = prompt("This is a family photo: What's the key fam?");
  if (x == "correct") {
    alert("yes!");
    document.getElementById("imgClickAndChange").src =
      "https://i.pinimg.com/originals/61/1b/10/611b102fa975e0b92ac762d241efb947.jpg";
  }
}
function changeImage2() {
  var x = prompt("This is a family photo: What's the key fam?");
  if (x == "correct") {
    alert("yes!");
    document.getElementById("imgClickAndChange2").src =
      "http://disneyexaminer.com/wp-content/uploads/2016/11/disney-holiday-season-shopping-black-friday-gift-ideas-2016-star-wars-family-sleepwear-collection-wookie-bb-8-pajamas.jpg";
  }
}

function bman1() {
  var x = confirm("Do you mind men cosplaying in latex?");

  if (x == true) {
    alert("yes!");
    document.getElementById("bmanid2").src = "./assets/img/batmanMild.jpg";
    // document.getElementById("bmanid2").onclick = "bman2()";
    document.querySelector("#bmanid2").setAttribute("onclick", "bman2()");
  }
}
function bman2() {
  var x = confirm("Doatex?");

  if (x == true) {
    alert("yes!");
    document.getElementById("bmanid2").src = "./assets/img/batmanSpicy.jpg";
  }
}

//
var surveyValueChanged = function(sender, options) {
  var el = document.getElementById(options.name);
  if (el) {
    el.value = options.value;
  }
};

var json = {
  questions: [
    {
      type: "radiogroup",
      name: "tickle",
      title: "If I told you I was ticklish would you tickle me?",
      choices: [{ value: "item1", text: "Yes" }, { value: "item2", text: "No" }]
    },
    {
      type: "radiogroup",
      name: "cook",
      title: "You have friends coming over, what would you cook?",
      choices: [
        { value: "item1", text: "Something on the grill" },
        { value: "item2", text: "Something in the oven" },
        { value: "item3", text: "Something in the microwave" },
        { value: "item4", text: "Something on the stove" }
      ]
    },
    {
      type: "imagepicker",
      name: "spirit",
      title: "Spirit Animal",
      choices: [
        { value: "charizard", imageLink: "./assets/img/charizard.png" },
        { value: "lion", imageLink: "./assets/img/lion.png" },
        { value: "sea turtle", imageLink: "./assets/img/sea-turtle.jpg" },
        { value: "tardigrade", imageLink: "./assets/img/tardigrade.jpg" }
      ]
    },

    {
      type: "radiogroup",
      name: "quote",
      title: "What quote is BS?",
      choices: [
        {
          value: "correct",
          text: '"I wanna live \'till I die, no more, no less."'
        },
        {
          value: "low",
          text:
            '"If anyone slaps you on the right cheek turn your left cheek also"'
        },
        { value: "high", text: '"Fish meat is practically a vegetable."' },
        { value: "item1", text: '"You can\'t always get what you want."' }
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").innerHTML =
    "result: " + JSON.stringify(result.data);
});

survey.data = {
  tickle: ["skipped"],
  cook: ["skipped"],
  spirit: ["skipped"],
  quote: ["skipped"]
};

$("#surveyElement").Survey({
  model: survey,
  onValueChanged: surveyValueChanged
});
