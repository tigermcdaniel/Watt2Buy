//var mysql = require('WATT2BUY');

console.log("Test1");
window.onload =budgetTest;
console.log("Test2");
//just to check if connection via budget
var resultTherm= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='../img/smartTherm.jpg'><div class='card-body'><h3 class='card-title'>Smart Thermostat</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultShade= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='../img/smartShades.JPG'><div class='card-body'><h3 class='card-title'>Smart Shades</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";
var resultLight= "<div style='width: 33%;'><div class='card'><img class='card-img-top' src='../img/smartLighting.jpg'><div class='card-body'><h3 class='card-title'>Smart Lighting</h3><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>Investment Cost: $</li></ul></div></div>";

document.getElementById("resultsAfterSurvey").innerHTML = resultTherm + resultShade + resultLight;
var inBudget;

function budgetTest(){
  console.log("Test3");
  inBudget = document.getElementById("budget").value;
  console.log(inBudget);
  if (inBudget <=1000){
    document.getElementById("resultsAfterSurvey").innerHTML = resultTherm + resultShade + resultLight;
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


function space(value){
  if(document.getElementById('yes').checked) {
  //Male radio button is checked
  document.getElementById("spaceChoice").innerHTML='<input type="radio" id="yes" name="gender" value="yes" align="right" onclick=space()><label for="yes">Yes</label><br><input type="radio" id="no" name="gender" value="no" onclick=space()><label for="no">No</label><br><p>How Much?: </p><input id="sizeInput" type="text" placeholder="Sq. meters"/>'
  }else if(document.getElementById('no').checked) {
    document.getElementById("spaceChoice").innerHTML='<input type="radio" id="yes" name="gender" value="yes" align="right" onclick=space()><label for="yes">Yes</label><br><input type="radio" id="no" name="gender" value="no" onclick=space()><label for="no">No</label><br>'
  }
}

var string = ' '
function resultCalc(){
  title='<h1>RESULTS</h1><br><br><div class="container p-3 my-3 bg-white border" align="center"><div class="row">'
  rooftop='<div style="width: 33%;"">\
          <div class="card">\
            <img class="card-img-top" src="./img/ResRoofTopSolar.jpg">\
            <div class="card-body">\
              <h3 class="card-title">Rooftop Solar</h3>\
              <p class="card-text">Go to option for new solar investors as one can produce their own energy without requiring land space. </p>\
            </div>\
            <ul class="list-group list-group-flush">\
              <li class="list-group-item">Investment Cost: $5,185</li>\
            </ul>\
          </div>\
        </div>'
  teslaRoof='<div style="width: 33%;">\
          <div class="card">\
            <img class="card-img-top" src="./img/solarTiles.jpg">\
            <div class="card-body">\
              <h3 class="card-title">Solar Roof</h3>\
              <p class="card-text"> Replace your current roof with Solar Roof and power your home with a fully integrated solar system.</p>\
            </div>\
            <ul class="list-group list-group-flush">\
              <li class="list-group-item">Investment Cost: $31,133</li>\
            </ul>\
          </div>\
        </div>'
  garden='<div style="width: 33%;">\
          <div class="card">\
            <img class="card-img-top" src="./img/gardenSolar.jpg">\
            <div class="card-body">\
              <h3 class="card-title">Garden Solar</h3>\
              <p class="card-text">Provide shade in your yard and garden while also powering your home with this 3000W system!</p>\
            </div>\
            <ul class="list-group list-group-flush">\
              <li class="list-group-item">Investment Cost: $4,857</li>\
            </ul>\
          </div>\
        </div>'
  tesla='<div style="width: 33%;">\
        <div class="card">\
          <img class="card-img-top" src="./img/teslaModel3.jpg">\
          <div class="card-body">\
            <h3 class="card-title">Tesla Model 3</h3>\
            <p class="card-text">Rear-Wheel Drive Standard Long Range Some quick example text to build on the card title and make up the bulk of the cards content.</p>\
          </div>\
          <ul class="list-group list-group-flush">\
            <li class="list-group-item">Investment Cost: $44,500</li>\
          </ul>\
        </div>\
      </div>'
  hummer='<div style="width: 33%;">\
        <div class="card">\
          <img class="card-img-top" src="./img/HummerEV2.jpg">\
          <div class="card-body">\
            <h3 class="card-title">GMC Hummer EV</h3>\
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>\
          </div>\
          <ul class="list-group list-group-flush">\
            <li class="list-group-item">Investment Cost: $79,995</li>\
          </ul>\
        </div>\
      </div>'

  leaf='<div style="width: 33%;">\
        <div class="card">\
          <img class="card-img-top" src="./img/nissanLeaf.jpg">\
          <div class="card-body">\
            <h3 class="card-title">Nissan Leaf</h3>\
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>\
          </div>\
          <ul class="list-group list-group-flush">\
            <li class="list-group-item">Investment Cost: $31,600 (New)/ $9,000 (Used 2016 22,544mi)</li>\
          </ul>\
        </div>\
      </div>'
  thermostat='<div style="width: 33%;">\
        <div class="card">\
          <img class="card-img-top" src="./img/smartTherm.jpg">\
          <div class="card-body">\
            <h3 class="card-title">Smart Thermostat</h3>\
            <p class="card-text">Google Nest Thermostat 3rd Generation is a programmable smart thermostat that learns your schedule and the temperatures you like and programs itself to help you save energy and stay comfortable. </p>\
          </div>\
          <ul class="list-group list-group-flush">\
            <li class="list-group-item">Investment Cost: $199.99</li>\
          </ul>\
        </div>\
      </div>'
  shades= '<div style="width: 33%;">\
        <div class="card">\
          <img class="card-img-top" src="./img/smartShades.JPG">\
          <div class="card-body">\
            <h3 class="card-title">Smart Shades</h3>\
            <p class="card-text">MySmartRollerShades are the smartest, Bluetooth-enabled roller shades for interior windows. include a solar charging panel so you never have to plug them in.</p>\
          </div>\
          <ul class="list-group list-group-flush">\
            <li class="list-group-item">Investment Cost: $399.00</li>\
          </ul>\
        </div>\
      </div>'
  lights= '<div style="width: 33%;"">\
        <div class="card">\
          <img class="card-img-top" src="./img/smartLighting.jpg">\
          <div class="card-body">\
            <h3 class="card-title">Smart Lighting</h3>\
            <p class="card-text">Each kit contains 4 Philips Hue White A19 60W Energy Star Certified LED Smart bulbs. Bulbs can be controlled remotely with the Philips Hue App or voice activated with Alexa.</p>\
          </div>\
          <ul class="list-group list-group-flush">\
            <li class="list-group-item">Investment Cost: $99.99</li>\
          </ul>\
        </div>\
      </div>'
  if(parseInt(document.getElementById("budget").value)>60000){
    if(document.getElementById("solarCheck").value=="on"){
      if(document.getElementById("roofing").value=="clay"){
        string=string+rooftop
      } else{
        string=string+teslaRoof
      }
      if(document.getElementById("yes").value=-"on"){
      if(parseInt(document.getElementById("sizeInput").value)>4){
        string=string+garden
      }}
    }
    if(document.getElementById("EVCheck").value=="on"){
      if(document.getElementById("truck").value=="on"){
        string=string+hummer
      } else if(document.getElementById("distance").value=="on"){
        string=string+tesla
      } else{
        string=string+leaf
      }
    }
    string=string+thermostat+shades+lights
  }else if(parseInt(document.getElementById("budget").value)>10000){
    if(document.getElementById("solarCheck").value=="on"){
      string=string+rooftop
      if(parseInt(document.getElementById("sizeInput").value)>4){
        string=string+garden
      }
    }
    if(document.getElementById("EVCheck").value=="on"){
      string=string+leaf
    }
    string=thermostat+shades+lights
  } else{
    string=thermostat+shades+lights
  }

document.getElementById("Survey_Results").innerHTML=title+string+'</div>'+'</div>'
}
