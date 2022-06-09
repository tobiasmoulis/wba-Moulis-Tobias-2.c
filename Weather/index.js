let loc = document.getElementById("loc");
let temp = document.getElementById("tempT");
let tempicon=document.getElementById("tempIcon");
let climate = document.getElementById("climateT");
let windSpeed = document.getElementById("wind");
let hu = document.getElementById("humidity")
let icons;

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';

});

const getWeather=async (city)=>{
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33fe8d448bdb59247ef0b8587939af48`,
        {mode: 'cors'})
        const weatherData = await response.json();
        console.log(weatherData)
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        const{speed}=weatherData.wind;
        const{humidity}=weatherData.main;
        climate.textContent=main;
        loc.textContent=name;
        windSpeed.textContent=speed + 'm/s';
        hu.textContent=humidity + '%';
        temp.textContent=Math.round(feels_like-273)+'°C';
        if(main == 'Clouds'){
            tempicon.src="./icons/solide.png"
        }
        else if(main == 'Rain'){
            tempicon.src="./icons/rain.png"
        }
        else if(main == 'Clear'){
            tempicon.src="./icons/sunny.png"
        }
    }
    catch(error){
        alert('city not found');
    }
}

function switchFunction() {
    var element = document.getElementById("body");
    element.classList.toggle("black");
    var s = document.getElementById("s");
    s.classList.toggle("searchDark");
    var c = document.getElementById("contant");
    c.classList.toggle("contantDark");
    var sw = document.getElementById("switch");
    sw.classList.toggle("switchDark");
    var sb = document.getElementById("searchButton");
    sb.classList.toggle("searchBDark");
    var x = document.getElementById("switch");
    if (x.innerHTML === "DARK MODE") {
    x.innerHTML = "LIGHT MODE";
    } else {
    x.innerHTML = "DARK MODE";
    }
}