//NPS API to pull full park name
var apiParks =
  "https://developer.nps.gov/api/v1/parks?parkCode=${fullName}&stateCode=&api_key=MVj5HVGtvVizx4wzcJ24hUmEImkvRT5DF2t8dyk1";
fetch(apiParks)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(apiParks);
    console.log(data.data[0].fullName);
  })
  .catch(function (err) {
    console.log(err);
  });

//NPS API to pull address, contact info, description of park
// const apiList = [];
// const matches = [];
// const scoredMatches = [];
// // traverse all apis, save matches
// for (const [apiParks, apiInfo] of Object.entries(apiList)) {
//   delete apiInfo.definitions;
//   delete apiInfo.paths;
//   const apiText = JSON.stringify(apiInfo);
//   const nameMatch = apiParks.match(keywords);
//   const apiInfoMatch = apiText.match(keywords);
//   if (nameMatch || apiInfoMatch) matches.push({ apiParks, apiInfo });
// }

// api_key=MVj5HVGtvVizx4wzcJ24hUmEImkvRT5DF2t8dyk1
