var mysql = require('WATT2BUY');

function addUser(){
    var userName = document.getElementById("inputUserame").value;
    var email = document.getElementById("inputEmail").value;
    var password1 = document.getElementById("inputPassword").value;
    var password2 = document.getElementById("inputConfirmPassword").value;

    var hash;
    if(password1 == password2){
        hash = hash(password2);
    }else {
        alert("Given passwords do not match!");
    }

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
        var sql = "INSERT INTO USER (userName) VALUES (email, passord1, 'Customer', new Date(date string), new Date(date string))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 user inserted!");
        });
      });

}

function hash(s){
    var hash = 0, i, chr;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}