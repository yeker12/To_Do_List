// we can use API url:openweathermap.org
const API_KEY = "8c0a44f8474c93e72dd1e2560716efb0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response => Response.json())
    .then((data) => {
        const cityContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = ` / ${data.weather[0].main} / ${data.main.temp}℃ `;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

