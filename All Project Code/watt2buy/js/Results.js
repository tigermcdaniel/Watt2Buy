var mysql = require('WATT2BUY');

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
