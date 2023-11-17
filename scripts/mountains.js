import { mountainsArray } from "./mountainData.js";

let mountainDropdownEl = document.getElementById("mountains-dropdown");
let mountainDisplay = document.getElementById("mountain-placeholder");
let mountainDivEl = document.getElementById("mt-div");

window.onload = () => {
    populateMountainDropdown();

    
    mountainDropdownEl.onchange = () => {
        mountainDisplay.innerHTML = ""

        let mountain = mountainsArray.find((mtn) => { return mtn.name === mountainDropdownEl.value });
                mountainDisplay.innerHTML = 
                `<div class="card text-bg-light bg-transparent" style="border: none;">
                    <img src="./images/mountains/${mountain.img}" class="card-img-top rounded" alt="">
                    <div class="card-body bg-transparent" backdrop-filter: blur(10px);">
                        <h4 class="card-title">${mountain.name}</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${mountain.effort} | ${mountain.elevation} feet</h6>
                        <p class="card-text">${mountain.desc}</p>
                    </div>
                </div> `;

        // mountainDivEl.style.visibility = "visible";

    }
        

}

function populateMountainDropdown(){
    for(let mountain of mountainsArray){
        let mountainOption = new Option (mountain.name);
        mountainDropdownEl.appendChild(mountainOption);
    }
}
