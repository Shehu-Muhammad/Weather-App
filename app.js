const cityId = document.getElementById('city');
const buttonId = document.getElementById('button');

let temp = document.getElementById('temp');
let max_temp = document.getElementById('max_temp');
let min_temp = document.getElementById('min_temp');
let humidity = document.getElementById('humidity');
let weather = document.getElementById('weather');
let description = document.getElementById('description');
let picture = document.getElementById('picture');
let loc = document.getElementById("loc");

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

        let weatherType = data["weather"]["0"]["main"];

        let weatherOptions ={
            thunderstorm: {
                weather: "Thunderstorm",
                src: "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            },
            drizzle: {
                weather: "Drizzle",
                src: "https://image.shutterstock.com/image-photo/rain-droplets-on-window-glass-260nw-184677416.jpg"
            },
            rain: {
                weather: "Rain",
                src: "https://media.istockphoto.com/photos/rain-water-drop-falling-to-the-floor-in-rainy-season-picture-id522795232?k=6&m=522795232&s=612x612&w=0&h=iXr_3pGp0Q9-rCoiZYaxbPOushgiC3IwmH3VOhN2ui4="   
            },
            snow: {
                weather: "Snow",
                src: "https://fateclick.com/images/article/20161017211724758.jpg"
            },
            fog: {
                weather: "Fog",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/TreesInTheFog.jpg/1200px-TreesInTheFog.jpg"
            },
            clear: {
                weather: "Clear",
                src: "https://images.unsplash.com/photo-1517758478390-c89333af4642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            },
            clouds: {
                weather: "Clouds",
                src: "https://backgroundcheckall.com/wp-content/uploads/2017/12/background-awan-mendung.jpg"
            }
        };
        
        temp.innerHTML = data["main"]["temp"];
        max_temp.innerHTML = data["main"]["temp_max"];
        min_temp.innerHTML = data["main"]["temp_min"];
        humidity.innerHTML = data["main"]["humidity"];
        weather.innerHTML = weatherType;
        description.innerHTML = data["weather"]["0"]["description"];

        if(weatherOptions["thunderstorm"]["weather"] === weatherType){
            picture.src = weatherOptions["thunderstorm"]["src"];
        } else if(weatherOptions["drizzle"]["weather"] == weatherType) {
            picture.src = weatherOptions["drizzle"]["src"];
        } else if(weatherOptions["rain"]["weather"] == weatherType){
            picture.src = weatherOptions["rain"]["src"];
        } else if(weatherOptions["snow"]["weather"] == weatherType){
            picture.src = weatherOptions["snow"]["src"];
        } else if(weatherOptions["fog"]["weather"] == weatherType){
            picture.src = weatherOptions["fog"]["src"];
        } else if(weatherOptions["clear"]["weather"] == weatherType){
            picture.src = weatherOptions["clear"]["src"];
        } else if(weatherOptions["clouds"]["weather"] == weatherType){
            picture.src = weatherOptions["clouds"]["src"];
        }
        
        loc.innerHTML = city;
        loc.classList.add("cap");
        summary.classList.remove("hide");
    })
    .catch((error)=>{
        console.log(error)
    });
}

buttonId.addEventListener("click", findWeather);
