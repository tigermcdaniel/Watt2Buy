function saveResults(){
    var userName = document.getElementById("username").value;
    var results = document.getElementById("Survey_Results").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/nodejs/saveResults?userName="+userName+"&results="+results, false);
    xhttp.send();

    if (xhttp.status != 200) {
        alert("Results Not Saved.");
        return;
    }else {
        alert("Results Saved.");
    }

    console.log(userName + "  Saved Results.");
    //redirect the user after they have logged in 
}