//Weather API//
var APIKey = "cda2b0c406ccc575b9e9e93d4232a23d";
    
    
    function test (cityinput){
        var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityinput}&appid=${APIKey}`;
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            var lat = data.coord.lat
            var lon = data.coord.lon
            var queryURL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIKey}&units=imperial`;
            fetch(queryURL2)
            .then(function (response){
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                var Temp = data.current.temp
                var Wind = data.current.wind_speed
                var Humidity = data.current.humidity
                var UVI= data.current.uvi
                $("#Temp").append (Temp)
                $("#Wind").append (Wind)
                $("#Humidity").append (Humidity)
                $("#UV").append (UVI)
            })
        })
    }
    
    $("#searchbtn").on("click",function(){
        var cityinput = $("#city").val()
       test () 
    })
