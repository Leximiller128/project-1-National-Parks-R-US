//figure out the state park api and implement it

//use open weather api to get the weather and use it to display the weather

var apiParks =
  "https://developer.nps.gov/api/v1/parks?stateCode=" +
  stateName +
  "&api_key=MVj5HVGtvVizx4wzcJ24hUmEImkvRT5DF2t8dyk1";
fetch(apiParks).then(function (response) {
<<<<<<< HEAD
    return response.json();
})

let weather = {
    apiKey: "e606684467a0eb77dafd42310f90ff21",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },


=======
  return response.json();
});

//this is a test
//this is another test
>>>>>>> main
