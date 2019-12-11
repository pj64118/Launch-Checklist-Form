// Write your JavaScript code here!
window.addEventListener("load", function() {
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         let i = Math.floor(Math.random()*json.length);
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[i].name}</li>
                        <li>Diameter: ${json[i].diameter}</li>
                        <li>Star: ${json[i].star}</li>
                        <li>Distance from Earth: ${json[i].distance}</li>
                        <li>Number of Moons: ${json[i].moons}</li>
                     </ol>
                     <img src="${json[i].image}">`;
         event.preventDefault();            
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '') {
         alert("All fields are required!");
         document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
         document.getElementById("launchStatus").style.color = "black";
         document.getElementById("faultyItems").style.visibility = "hidden";
         event.preventDefault(); 
      } else {
     
         if (!(isNaN(pilotNameInput.value))) {
               alert("Pilot Name should be alphabetic.");
               document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
               document.getElementById("launchStatus").style.color = "black";
               document.getElementById("faultyItems").style.visibility = "hidden";
               event.preventDefault(); 
         } else if (!(isNaN(copilotNameInput.value))) {
               alert("Co-pilot Name should be alphabetic.");
               document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
               document.getElementById("launchStatus").style.color = "black";
               document.getElementById("faultyItems").style.visibility = "hidden";
               event.preventDefault();
         } else if (isNaN(fuelLevelInput.value)) { 
               alert("Fuel Level must be numeric.");
               document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
               document.getElementById("launchStatus").style.color = "black";
               document.getElementById("faultyItems").style.visibility = "hidden";
               event.preventDefault();    
         } else if (isNaN(cargoMassInput.value)) {
               alert("Cargo Mass must be numeric.");
               document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
               document.getElementById("launchStatus").style.color = "black";
               document.getElementById("faultyItems").style.visibility = "hidden";
               event.preventDefault();
         } else {

               let readyToLaunch = true;
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
               document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         
              if (fuelLevelInput.value < 10000) {
                  document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"; 
                  readyToLaunch = false;
               } else {
                  document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
               }

               if (cargoMassInput.value > 10000) {
                  document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
                  readyToLaunch = false;
               } else {
                  document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";  
               }
      
               if (readyToLaunch) {
                  document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
                  document.getElementById("launchStatus").style.color = "green";
                  document.getElementById("faultyItems").style.visibility = "hidden";
                  event.preventDefault();
               } else {
                  document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
                  document.getElementById("launchStatus").style.color = "red";
                  document.getElementById("faultyItems").style.visibility = "visible";
                  event.preventDefault();
               }
            }   
         }      
   });
});