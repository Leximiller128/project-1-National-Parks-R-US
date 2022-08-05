// NPS api_key=MVj5HVGtvVizx4wzcJ24hUmEImkvRT5DF2t8dyk1

//NPS API to pull full park name
const cardcontent = document.getElementById("cardcontent");
const searchbtn = document.getElementById("searchbtn");
const cardfield = document.getElementById("cardfield");
const inputValue = document.querySelector(".input");
const searchResults = document.getElementById("results-conatiner");

searchbtn.addEventListener("click", listHandler);

function listHandler(e) {
  e.preventDefault();
  let userPark = inputValue.value.trim();
  console.log(userPark);
  searchParkName(userPark);
  console.log(inputValue.value.typeof);
  };
function searchParkName(userPark) {
  const apiParks = `https://developer.nps.gov/api/v1/parks?limit=10&q=${userPark}&api_key=MVj5HVGtvVizx4wzcJ24hUmEImkvRT5DF2t8dyk1`;
  fetch(apiParks)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let dataArray = data.data;
      console.log(dataArray);
      for (let index = 0; index < dataArray.length; index++) {
        const fullName = dataArray[index].fullName;
        const city = dataArray[index].addresses[0].city;
        const address = dataArray[index].addresses[0].line1;
        const postal = dataArray[index].addresses[0].postalCode;
        const state = dataArray[index].addresses[0].stateCode;
        const description = dataArray[index].description;
        const contacts = dataArray[index].contacts.phoneNumbers[0].phoneNumber;
        console.log(fullName);
        var listEl = document.createElement("ul");
        var nameEl = document.createElement("li");
        var addressEl = document.createElement("li");
        var descEl = document.createElement("li");
        var contactEl = document.createElement("li");
        nameEl.textContent = "Park Name: " + fullName;
        listEl.appendChild(nameEl);
        addressEl.textContent = "Address: " + address + ", " + city + ", " + state + ", " + postal;
        listEl.appendChild(addressEl);
        contactEl.textContent = "Phone Number: " + contacts;
        listEl.appendChild(contactEl);
        cardfield.appendChild(listEl);
      }
    });
}
// .catch(function (error) {
//   console.log(err);
// });

// for (let index = 0; index < data.data[0].length; index++) {
//   var searchParkName = array[index].fullName;

//     var listEl = document.createElement("results");
//     listEl.classList = "list-item flex-row justify-space-between align-center";
//   }
// }

// .catch(function (err) {
//   console.log(err);
// });

function modalContent() {
  //add random array to modal in html
  document.querySelector(".modal-box").innerHTML = result;
}
//pull random item from array
function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

//random facts!
const array = [
  "Bent's Old Fort National Historic Site features a reconstructed 1840s adobe fur trading post on the mountain branch of the Santa Fe Trail where traders, trappers, travelers, and the Cheyenne and Arapaho tribes came together in peaceful terms for trade. Today, living historians recreate the sights, sounds, and smells of the past with guided tours, demonstrations and special events.",
  "There are many ways to enjoy Boston Harbor Islands and many ways to get there. For more information on how to get to the park by ferry, car, or private boat, please visit www.bostonharborislands.org.",
  "Three of the 10 highest waterfalls in the world are located in Yosemite National Park in California.",
  "The Grand Canyon, in Grand Canyon National Park in Arizona, is known as one of the Seven Natural Wonders of the World.",
  "National parks are home to life on a big scale: Sequoia trees are some of the world's largest living things, and Alaskan brown bears are some of the world's largest carnivores.",
  "National parks are home to life on a big scale: Sequoia trees are some of the world's largest living things, and Alaskan brown bears are some of the world's largest carnivores.",
  "Everglades National Park protects more than 25% of Florida's original everglades (subtropical wetlands).",
  "Trail Ridge Road in Rocky Mountain National Park, which connects Grand Lake and Estes Park, is the highest continuously paved road in the U.S., and it includes breathtaking views and vistas along its entire 48 miles.",
  "At 1,932 feet deep, Crater Lake National Park in Oregon is the deepest lake in the U.S.",
  "Only one state in the country is not lucky enough to currently have either a national park or national monument. It is actually the country’s first state, Delaware... Lame. Don't go to Delaware.",
  "White Sands National Monument spans more than 176,000 acres of New Mexico desert and contains the largest gypsum dune fields in the world.",
];
//result of function getRandomItem
const result = getRandomItem(array);
console.log(result);

//bulma js for actions of modal
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});
