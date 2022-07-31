//figure out the state park api and implement it

//use open weather api to get the weather and use it to display the weather

var apiParks =
  "https://developer.nps.gov/api/v1/parks?stateCode=" +
  stateName +
  "&api_key=MVj5HVGtvVizx4wzcJ24hUmEImkvRT5DF2t8dyk1";
fetch(apiParks).then(function (response) {
  return response.json();
});

//this is a test
//this is another test
