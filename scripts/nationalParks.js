    
// How to select different search options? Radio buttons or dropdown?
    // search by location
        // select state or territory from dropdown - locationData.js
            // park's "State" property

    // search by park type
        // select park type from dropdown - parkTypeData.js
            // "LocationName" contains the description
                // .toLowerCase both strings to match


import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";
import { nationalParksArray } from "./nationalParkData.js";


let locationDropdownEl = document.getElementById("park-location-dropdown");
let parkTypeDropdownEl = document.getElementById("park-type-dropdown");
let parkPlaceholder = document.getElementById("park-placeholder");

window.onload = ()=>{

    populateLocationDropdown();
    populateTypeDropdown();

    locationDropdownEl.onchange = () => {
        console.log(locationDropdownEl.value);
        parkPlaceholder.innerHTML = "";
        parkTypeDropdownEl.selectedIndex = 0


        for(let nationalPark of nationalParksArray){
            if(nationalPark.State === locationDropdownEl.value){
                displayPark(nationalPark);
            }
        }
    }

    parkTypeDropdownEl.onchange = () => {
        console.log(parkTypeDropdownEl.value);
        parkPlaceholder.innerHTML = "";
        locationDropdownEl.selectedIndex = 0


        for(let nationalPark of nationalParksArray){
            if(nationalPark.LocationName.includes(parkTypeDropdownEl.value)){
                displayPark(nationalPark);
            }
        }
    }

}

function populateLocationDropdown(){
    for(let location of locationsArray){
        let locationOption = new Option (location);
        locationDropdownEl.appendChild(locationOption);
    }
}

function populateTypeDropdown(){
    for(let parkType of parkTypesArray){
        let typeOption = new Option (parkType);
        parkTypeDropdownEl.appendChild(typeOption);
    }
}

function displayPark(park){
    
    let parkTitle = document.createElement("h2");
    parkTitle.innerHTML = `${park.LocationName}`
    parkPlaceholder.appendChild(parkTitle);
    
    let parkDescription = document.createElement("p");
    parkDescription.innerHTML = `<h5>Location:</h5>
    <p>${park.City}, ${park.State}<p> <hr/>`;
    parkPlaceholder.appendChild(parkDescription);

    

    scrollIndicator();
}

function scrollIndicator(){
    let scrollHeroText = document.getElementById("scroll-text");
        scrollHeroText.classList.add("scroll-down");
}