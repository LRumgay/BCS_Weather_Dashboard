//Weather API//
var APIKey = "cda2b0c406ccc575b9e9e93d4232a23d";




$("button").on("click", function (event) {
event.preventdefault();
var city = $("#city").val();
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
fetch(queryURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);

    
    var lat = "";
    var lon = "";
var queryURL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIkey}`;
    fetch(queryURL2)
        .then(function (response){
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
    })
})
//---Current Weather API//




