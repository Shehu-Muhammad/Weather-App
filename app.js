const cityId = document.getElementById('city');
const buttonId = document.getElementById('button');

const key = "64f741db0a1fe1a23da3012a84e0eacc";
const summary = document.getElementById('summary');
summary.classList.add("hide");
function findWeather() {
    let city = cityId.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${key}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        //console.log(JSON.stringify(data));
        // console.log(data["main"]["temp"]); //Temperature in Fahrenheit
        // console.log(data["main"]["temp_min"]);
        // console.log(data["main"]["temp_max"]);
        // console.log(data["main"]["humidity"]);
        // console.log(data["weather"]["0"]["description"]);//Summary of weather
        // console.log(data["weather"]["0"]["main"]);
        let temp = document.getElementById('temp');
        let max_temp = document.getElementById('max_temp');
        let min_temp = document.getElementById('min_temp');
        let humidity = document.getElementById('humidity');
        let weather = document.getElementById('weather');
        let description = document.getElementById('description');
        let loc = document.getElementById("loc");

        temp.innerHTML = data["main"]["temp"];
        max_temp.innerHTML = data["main"]["temp_max"];
        min_temp.innerHTML = data["main"]["temp_min"];
        humidity.innerHTML = data["main"]["humidity"];
        weather.innerHTML = data["weather"]["0"]["main"];
        description.innerHTML = data["weather"]["0"]["description"];
        
        loc.innerHTML = city;
        loc.classList.add("cap");
        summary.classList.remove("hide");
    })
    .catch((error)=>{
        console.log(error)
    });
}

buttonId.addEventListener("click", findWeather);