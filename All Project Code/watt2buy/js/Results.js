//var mysql = require('WATT2BUY');

console.log("Test1");


var budgetAppMessage = "<h5> Your budget is too small to fund the product you're looking for. Instead we recommend these small investments for energy saving.</h1><br><br>";
var budgetMessage = "<h5> Your budget is too small to fund the product you're looking for. These are the products we recommend you purchase once you have enough funding.</h1><br><br>";
var budgetEVMessage = "<h5> You don't have sufficent funding for an Electrical Vehicle, but here are some solar recommendations.</h1><br><br>";
var budgetTilesMessage = "<p> Note: You don't have sufficent funding for Solar Tile Roofing, but we recommend it as a future investment once you have enough funding.</p><br><br>";

var resultTherm= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/smartTherm.jpg'><div class='card-body'><h3 class='card-title'>Smart Thermostat</h3><p class='card-text'>Google Nest Thermostat 3rd Generation is a programmable smart thermostat that learns your schedule and the temperatures you like and programs itself to help you save energy and stay comfortable.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $199.99</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";
var resultShade= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/smartShades.JPG'><div class='card-body'><h3 class='card-title'>Smart Shades</h3><p class='card-text'>MySmartRollerShades are the smartest, Bluetooth-enabled roller shades for interior windows. include a solar charging panel so you never have to plug them in.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $399.00</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";
var resultLight= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/smartLighting.jpg'><div class='card-body'><h3 class='card-title'>Smart Lighting</h3><p class='card-text'>Each kit contains 4 Philips Hue White A19 60W Energy Star Certified LED Smart bulbs. Bulbs can be controlled remotely with the Philips Hue App or voice activated with Alexa.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $99.99</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";

var resultTiles= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/solarTiles.jpg'><div class='card-body'><h3 class='card-title'>Solar Roof</h3><p class='card-text'>Replace your current roof with Solar Roof and power your home with a fully integrated solar system.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $31,133</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";
var resultRoof= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/ResRoofTopSolar.jpg'><div class='card-body'><h3 class='card-title'>Rooftop Solar</h3><p class='card-text'>Go to option for new solar investors as one can produce their own energy without requiring land space.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $5,18</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";
var resultGarden= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/gardenSolar.jpg'><div class='card-body'><h3 class='card-title'>Garden Solar</h3><p class='card-text'>Provide shade in your yard and garden while also powering your home with this 3000W system</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $4,857</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";

var resultTesla = "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/teslaModel3.jpg'><div class='card-body'><h3 class='card-title'>Tesla Model 3</h3><p class='card-text'></p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $44,500</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";
var resultNissan = "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/nissanLeaf.jpg'><div class='card-body'><h3 class='card-title'>Nissan Leaf</h3><p class='card-text'></p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $31,600</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";
var resultHummer = "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='./img/HummerEV2.jpg'><div class='card-body'><h3 class='card-title'>GMC Hummer EV</h3><p class='card-text'></p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost:  $79,995</li></ul><a href='#' class='btn btn-primary'>Add to Cart</a></div></div>";

var title='<h1 class="jumbotron-heading">Results</h1><div class= "row"><div id="message"></div>'
var userButton='<br><br><div class="form-group" align="center"><label for="articleTitle"><p>Save Results:</p> <input type="text" class="form-control" id="budget" placeholder="Enter username" align="center" style="width: 300px;" > <a class="btn btn-primary btn-lg" onclick="saveResults()" role="button" style="color:white">Save</a></label></div>';

function resultCalc(){

  var inBudget = document.getElementById("budget").value;
  var inSolarInt = document.getElementById("solarInt").value;
  var inEVInt = document.getElementById("EVInt").value;

  console.log(inSolarInt);
  console.log (inEVInt);

  //if budget is too small, give appliances ******************
  if (inBudget <=4000){
    document.getElementById("Survey_Results").innerHTML = title+ resultTherm + resultShade + resultLight+'</div>'+userButton;
    document.getElementById("message").innerHTML = budgetAppMessage;
  }
  //if interest in solar or EV, go to function
  else if(inSolarInt== "on" | inEVInt== "on"){
  console.log("go to decideInterst");
  decideInterest();
   }
   //if not interested in other main products, recommend appliances
  else {
    console.log("No interest");
    document.getElementById("Survey_Results").innerHTML = title+resultTherm + resultShade + resultLight+'</div>'+userButton;
  }
}


function decideInterest(){
  var inBudget = document.getElementById("budget").value;
  var inSolarInt = document.getElementById("solarInt");
  var inEVInt = document.getElementById("EVInt");
  console.log(inSolarInt);
  console.log (inEVInt);
  console.log("deciding...");

  if(inSolarInt.checked && inEVInt.checked){
    console.log("in Both");
    if(inBudget<32000){
      document.getElementById("Survey_Results").innerHTML = title+'</div>';
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
  else if (inSolarInt.checked || inEVInt.checked){
    if(inSolarInt.checked){
      console.log("calcSolar");
      calcSolar()
    } else{
      console.log("go to calcEV");
      calcEV();
      if(inBudget< 32000){
        document.getElementById("Survey_Results").innerHTML = title+resultNissan + resultTesla + resultHummer+'</div>'+userButton;
        document.getElementById("message").innerHTML = budgetMessage;
      }
    }
    
  }
}


function calcBoth(){
  console.log("in Both Solar and EV");
  var inFreeSpace = document.getElementById("freeSpace").value;
  var inRoof = document.getElementById("roofingType").value;
  var inTruck = document.getElementById("truckBed").value;
}

function calcEV(){
  console.log("in calcEV");
  var inTruck = document.getElementById("truckBed");
  var inBudget = document.getElementById("budget").value;
  if (inTruck.checked){
    console.log ("Test in truckBed");
    //check if budget is sufficient for hummer, if not still give suggestion but state it can be a long term goal
    if (inBudget<79000){
      document.getElementById("Survey_Results").innerHTML = title+'</div>'+userButton;
      document.getElementById("message").innerHTML = budgetMessage;
    }
    document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultHummer + "</div>"+'</div>'+userButton;// we could just have the one rec of the hummer with nothing else
  }
  else if(inBudget>44000){
    document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultTesla + resultNissan + "</div>"+'</div>'+userButton
  }
  else{
    document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultNissan + "</div>"+'</div>'+userButton;
  }

}

function calcSolar(){
  var inFreeSpace = document.getElementById("gardenAvail");
  var inRoof = document.getElementById("clay");
  var inBudget = document.getElementById("budget").value;
  console.log("in calcSolar");
  if(inFreeSpace.checked){
    if (inRoof.checked){
    document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultRoof + resultGarden + "</div>"+'</div>'+userButton;
    }
    else{//inRoof=="no"
      document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultTiles + resultGarden + "</div>"+'</div>'+userButton;
      if(inBudget<31000){
        document.getElementById("message").innerHTML = budgetTilesMessage;
      }
      }
  }

  else{//inFreeSpace=="no"
    if (inRoof.checked){
    document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultRoof + "</div>"+'</div>'+userButton;
    }
    else{//inRoof=="no"
      document.getElementById("Survey_Results").innerHTML = title+"<div class='col d-flex justify-content-center'>" + resultTiles + "</div>"+'</div>'+userButton;
      if(inBudget<31000){
        document.getElementById("message").innerHTML = budgetTilesMessage;
      }
      
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
