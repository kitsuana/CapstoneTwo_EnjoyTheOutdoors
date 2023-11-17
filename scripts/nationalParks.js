
import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";
import { nationalParksArray } from "./nationalParkData.js";


let locationDropdownEl = document.getElementById("park-location-dropdown");
let parkTypeDropdownEl = document.getElementById("park-type-dropdown");
let parkPlaceholder = document.getElementById("park-placeholder");
let parkListBtn = document.getElementById("park-list-btn")

window.onload = ()=>{

    populateLocationDropdown();
    populateTypeDropdown();

    locationDropdownEl.onchange = () => {

        parkPlaceholder.innerHTML = "";
        parkTypeDropdownEl.selectedIndex = 0


        for(let nationalPark of nationalParksArray){
            if(nationalPark.State === locationDropdownEl.value){
                displayPark(nationalPark);
            }
        }
    }

    parkTypeDropdownEl.onchange = () => {

        parkPlaceholder.innerHTML = "";
        locationDropdownEl.selectedIndex = 0


        for(let nationalPark of nationalParksArray){
            if(nationalPark.LocationName.includes(parkTypeDropdownEl.value)){
                displayPark(nationalPark);
            }
        }
    }

    parkListBtn.onclick = () => {
        for(let nationalPark of nationalParksArray){
            displayPark(nationalPark);
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
    
    parkPlaceholder.innerHTML += `
    <h2>${park.LocationName}</h2>
    <h5>Location:</h5>
    <p>${park.City}, ${park.State}</p> <hr/>`;

    // adding park cards template 
    // <div class="container card" id="park-placeholder">
    //         <div class="row row-cols-1 row-cols-md-2 g-4"></div>
    // 

    //     <div class="card h-100 text-bg-light">
    //         <img src="..." class="card-img-top" alt="...">
    //         <div class="card-body">
    //           <h4 class="card-title">Card title</h4>
    //           <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    //           <p class="card-text">Some quick example text.</p>
    //           <a href="#" class="btn btn-primary">Visit Site</a>
    //         </div>
    //     </div> 

    // </div>

    scrollIndicator();
}

function scrollIndicator(){
    let scrollHeroText = document.getElementById("scroll-text");
        scrollHeroText.classList.add("scroll-down");
}