//NPS API to pull full park name
var cardcontent = document.getElementById("cardcontent");
var searchbtn = document.getElementById("searchbtn");
var cardfield = document.getElementById("cardfield");
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
    console.log(data.data[0].addresses[0]);
    console.log(data.data[0].description);
    console.log(data.data[0].contacts.phoneNumbers[0]);
    console.log(data.data[0].entranceFees[0]);
  })
  .catch(function (err) {
    console.log(err);
  });

function displayData() {
  for (let index = 0; index < array.length; index++) {
    const fullName = data.data[0].fullName[0];
    const address = data.data[0].addresses[0];
    const description = data.data[0].description[0];
    const contacts = data.data[0].contacts.phoneNumbers[0];
    const entranceFees = data.data[0].entranceFees[0];
    e.target.data;
    var listEl = document.createElement("ul");
    var nameEl = document.createElement("li");
    var addressEl = document.createElement("li");
    var addressEl = document.createElement("li");
    var descEl = document.createElement("li");
    var contactEl = document.createElement("li");
    var feesEl = document.createElement("li");
    nameEl.textContent = fullName;
    listEl.appendChild(nameEl);
    addressEl.textContent = address;
    listEl.appendChild(addressEl);
    descEl.textContent = description;
    listEl.appendChild(descEl);
    contactEl.textContent = contacts;
    listEl.appendChild(contactEl);
    feesEl.textContent = entranceFees;
    listEl.appendChild(feesEl);
    cardfield.appendChild(listEl);
  }
}

// addEventListener("click", displayData(), {
// appendChild(cardcontent)
// }
// )

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

// document.querySelector(".searchbtn").addEventListener("click", function () {
//   whateverwecallthis.search();

function modalContent() {
  //add random array to modal in html
  document.querySelector(".box").innerHTML = result;
}
//pull random item from array
function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}
