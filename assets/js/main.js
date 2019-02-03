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
      type:"radiogroup",
      name:"tickle",
      title:"If I told you I was ticklish would you tickle me?",
      choices:[{value:"item1",text:"Yes"},{value:"item2",text:"No"}]},
    {
      type:"radiogroup",
      name:"cook",
      title:"You have friends coming over, what would you cook?",
      choices:[{value:"item1",text:"Something on the grill"},
      {value:"item2",
      text:"Something in the oven"},
      {value:"item3",
      text:"Something in the microwave"},
      {value:"item4",
      text:"Something on the stove"}
    ]},
    {
      type:"imagepicker",
      name:"spirit",
      title:"Spirit Animal",
      choices:[
        {value:"Charizard",
        imageLink:"./assets/img/charizard.png"
        },
        {value:"Lion",
        imageLink:"./assets/img/lion.png"
        },
        {value:"Sea turtle",
        imageLink:"./assets/img/sea-turtle.jpg"
        },
        {value:"Tardigrade",
        imageLink:"./assets/img/tardigrade.jpg"
        }
    ]},

    {
      type:"radiogroup",
      name:"quote",
      title:"What quote is BS?",
      choices:[{value:"item1",text:"\"I wanna live 'till I die, no more, no less.\""},
      {value:"item2",text:"\"If anyone slaps you on the right cheek turn your left cheek also.\""},
      {value:"item3",text:"\"Fish meat is practically a vegetable.\""},
      {value:"item4",text:"\"You can't always get what you want.\""}]},
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  var res = document.querySelector("#surveyResult");
  res.setAttribute("style", "display: block");

  //res.append("result: " + JSON.stringify(result.data));
  if(result.data.tickle == "item1"){
    var ans1 = "Yes";
  }  
  else {
    var ans1 = "No";
  }
  document.querySelector("#q1").append(ans1);
  if(result.data.cook == "item1"){
    var ans2 = "Something on the grill";
  }
  else if(result.data.cook == "item2"){
    var ans2 = "Something in the oven";
  }
  else if(result.data.cook == "item2"){
    var ans2 = "Something in the microwave";
  }
  else {
    var ans2 = "Something on the stove"
  }
  document.querySelector("#q2").append(ans2);
  document.querySelector("#q3").append(result.data.spirit);
  if(result.data.quote == "item1"){
    var ans3 = '"I wanna live \'till I die, no more, no less."';
  }
  else if(result.data.quote == "item2"){
    var ans3 = '"If anyone slaps you on the right cheek turn your left cheek also."';
  }
  else if(result.data.quote == "item3"){
    var ans3 = '"Fish meat is practically a vegetable."';
  }
  else {
    var ans3 = '"You can\'t always get what you want."';
  }
  document.querySelector("#q4").append(ans3);



  
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
