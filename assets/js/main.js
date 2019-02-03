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
      type: "checkbox",
      name: "car",
      title: "What car are you driving?",
      isRequired: true,
      colCount: 4,
      choices: [
        "None",
        "Ford",
        "Vauxhall",
        "Volkswagen",
        "Nissan",
        "Audi",
        "Mercedes-Benz",
        "BMW",
        "Peugeot",
        "Toyota",
        "Citroen"
      ]
    },
    {
      type: "radiogroup",
      name: "price",
      title: "Do you feel our current price is merited by our product?",
      choices: [
        {
          value: "correct",
          text: "Yes, the price is about right"
        },
        {
          value: "low",
          text: "No, the price is too low for your product"
        },
        {
          value: "high",
          text: "No, the price is too high for your product"
        }
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
  car: ["Ford"]
};

$("#surveyElement").Survey({
  model: survey,
  onValueChanged: surveyValueChanged
});
