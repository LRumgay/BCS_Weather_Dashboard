//Weather API//
var APIKey = "cda2b0c406ccc575b9e9e93d4232a23d";
var city = "Austin";
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;


fetch(queryURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
//---Weather API//

