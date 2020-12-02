//var mysql = require('WATT2BUY');

console.log("Test1");


var budgetAppMessage = "<h5> Your budget is too small to fund the product you're looking for. Instead we recommend these small investments for energy saving.</h1><br><br>";
var budgetMessage = "<h5> Your budget is too small to fund the product you're looking for. These are the products we recommend you purchase once you have enough funding.</h1><br><br>";
var budgetEVMessage = "<h5> You don't have sufficent funding for an Electrical Vehicle, but here are some solar recommendations.</h1><br><br>";
var budgetTilesMessage = "<p> Note: You don't have sufficent funding for Solar Tile Roofing, but we recommend it as a future investment once you have enough funding.</p><br><br>";

var resultTherm= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/smartTherm.jpg'><div class='card-body'><h3 class='card-title'>Smart Thermostat</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultShade= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/smartShades.JPG'><div class='card-body'><h3 class='card-title'>Smart Shades</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultLight= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/smartLighting.jpg'><div class='card-body'><h3 class='card-title'>Smart Lighting</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";

var resultTiles= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/solarTiles.jpg'><div class='card-body'><h3 class='card-title'>Solar Roof</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultRoof= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/ResRoofTopSolar.jpg'><div class='card-body'><h3 class='card-title'>Rooftop Solar</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultGarden= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/gardenSolar.jpg'><div class='card-body'><h3 class='card-title'>Garden Solar</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";

var resultTesla = "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/teslaModel3.jpg'><div class='card-body'><h3 class='card-title'>Tesla Model 3</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultNissan = "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/nissanLeaf.jpg'><div class='card-body'><h3 class='card-title'>Nissan Leaf</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultHummer = "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/HummerEV2.jpg'><div class='card-body'><h3 class='card-title'>GMC Hummer EV</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";


function resultCalc(){

  var inBudget = document.getElementById("budget").value;
  var inSolarInt = document.getElementById("solarInt").value;
  var inEVInt = document.getElementById("EVInt").value;

  console.log(inSolarInt);
  console.log (inEVInt);

  //if budget is too small, give appliances
  if (inBudget <=4000){
    document.getElementById("message").innerHTML = budgetAppMessage;
    document.getElementById("resultsInSurvey").innerHTML = resultTherm + resultShade + resultLight;
  }
  //if interest in solar or EV, go to function
  else if(inSolarInt== "yes" | inEVInt== "yes"){
  console.log("go to decideInterst");
  decideInterest();
   }
   //if not interested in other main products, recommend appliances
  else {
    console.log("No interest");
    document.getElementById("resultsInSurvey").innerHTML = resultTherm + resultShade + resultLight;
  }
}


function decideInterest(){
  var inBudget = document.getElementById("budget").value;
  var inSolarInt = document.getElementById("solarInt").value;
  var inEVInt = document.getElementById("EVInt").value;
  console.log(inSolarInt);
  console.log (inEVInt);

  if(inSolarInt== "yes" & inEVInt== "yes"){
    console.log("in Both");
    if(inBudget<32000){
      document.getElementById("message").innerHTML = budgetEVMessage;
      console.log("go to calcSolar");
      calcSolar();
    }
    else{
    console.log("go to calcBoth");
    calcBoth();
    }
  }
  //just solar
  else if (inSolarInt=="yes"){
    console.log("calcSolar");
    calcSolar();
  }
  else{//(inEVInt=="yes")
    if(inBudget< 32000){
      document.getElementById("message").innerHTML = budgetMessage;
      document.getElementById("resultsInSurvey").innerHTML = resultNissan + resultTesla + resultHummer;
    }
    else {
      console.log("go to calcEV");
      calcEV();
    }
  }
}


function calcBoth(){
  var inFreeSpace = document.getElementById("freeSpace").value;
  var inRoof = document.getElementById("roofingType").value;
  var inTruck = document.getElementById("truckBed").value;


}

function calcEV(){
  console.log("in calcEV");
  var inTruck = document.getElementById("truckBed").value;
  var inBudget = document.getElementById("budget").value;
  if (inTruck == "yes"){
    console.log ("Test in truckBed");
    //check if budget is sufficient for hummer, if not still give suggestion but state it can be a long term goal
    if (inBudget<79000){
        document.getElementById("message").innerHTML = budgetMessage;
    }
    document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultHummer + "</div>";// we could just have the one rec of the hummer with nothing else
  }
  else if(inBudget>44000){
    document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultTesla + resultNissan + "</div>";
  }
  else{
    document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultNissan + "</div>";
  }

}

function calcSolar(){
  var inFreeSpace = document.getElementById("freeSpace").value;
  var inRoof = document.getElementById("roofingType").value;
  var inBudget = document.getElementById("budget").value;

  if(inFreeSpace=="yes"){
    if (inRoof=="yes"){
    document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultRoof + resultGarden + "</div>";
    }
    else{//inRoof=="no"
      if(inBudget<31000){
        document.getElementById("message").innerHTML = budgetTilesMessage;
      }
      document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultTiles + resultGarden + "</div>";
    }
  }

  else{//inFreeSpace=="no"
    if (inRoof=="yes"){
    document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultRoof "</div>";
    }
    else{//inRoof=="no"
      if(inBudget<31000){
        document.getElementById("message").innerHTML = budgetTilesMessage;
      }
      document.getElementById("resultsInSurvey").innerHTML = "<div class='col d-flex justify-content-center'>" + resultTiles + "</div>";
    }
  }
}


function addTech(){
    var Q1 = document.getElementById("Question1").value;
    var Q2 = document.getElementById("Question2").value;
    // Continue with this once survey is finalized



    //add User to WATT2BUT.SQL USER table
    var mysql = require('WATT2BUY');

    var con = mysql.createConnection({
        host: "localhost",
        userName: userName,
        email: email,
        password: password1,
        database: "WATT2BUY"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO TECH (userName) VALUES (email, passord1, 'Tech', new Date(date string), new Date(date string))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 user inserted!");
        });
      });

}
