function updateTime(){

// New York Display

let newYorkElement= document.querySelector("#new-york");
if(newYorkElement) {
let newYorkDateElement= newYorkElement.querySelector (".date");
let newYorkTimeElement= newYorkElement.querySelector (".time");
let newYorkTime= moment().tz ("America/New_York");

newYorkDateElement.innerHTML= newYorkTime.format ("MMMM Do, YYYY");
newYorkTimeElement.innerHTML=  newYorkTime.format("h:mm:ss [<small>]A[</small>]");
}
// London Display

let londonElement= document.querySelector("#london");
if(londonElement) {
let londonDateElement= londonElement.querySelector (".date");
let londonTimeElement= londonElement.querySelector (".time");
let londonTime= moment().tz ("Europe/London");

londonDateElement.innerHTML= londonTime.format ("MMMM Do, YYYY");
londonTimeElement.innerHTML=  londonTime.format("h:mm:ss [<small>]A[</small>]");
}
}


// If I wanted to add milliseconds, I would use the following line:
// newYorkTimeElement.innerHTML=  newYorkTime.format("h:mm:ss.SSS [<small>]A[</small>]"); my interval would need to be 1 millisecond, not 1000 milliseconds (1 second).
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement=document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
