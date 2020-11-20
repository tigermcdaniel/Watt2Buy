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
