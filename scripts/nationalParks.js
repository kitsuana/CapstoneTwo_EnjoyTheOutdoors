    
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
    }

    parkTypeDropdownEl.onchange = () => {
        console.log(parkTypeDropdownEl.value);
        
        let parks = [];

        for(let nationalPark of nationalParksArray){
            if(nationalPark.LocationName.includes(parkTypeDropdownEl.value)){
                parks.push(nationalPark);
            }
        }
        console.log(parks);
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
    
}