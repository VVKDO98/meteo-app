let currentWeather = document.getElementById('main__weather');
let currentLocation = document.getElementById('main__location');
let currentHumidity = document.getElementById('humidity');
let currentWind = document.getElementById('wind');

window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat =  position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f013d08632f75fab5f3d3211add116f0`
            fetch(api)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                const {name} = data;
                const {temp} = data.main;
                const {humidity} = data.main;
                const {speed} = data.wind;
                currentLocation.textContent = name;
                currentWeather.textContent = Math.round(temp - 273);
                currentHumidity.innerHTML = "Humidity : " + humidity + "%";
                currentWind.textContent = "Wind : " + speed + " km/h";
            })
        })
    }
})

