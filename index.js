
let weather ={
    apikey:'83f6aacdd5a4835002c9424ce30c9789',
    fetchWeather : function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`)
        .then(response=>response.json())
        .then(data=>this.displayWeather(data));
    },
    displayWeather: (data)=>{
        let {name}=data;
        let {description,icon}=data.weather[0];
        let {humidity,temp}=data.main;
        let {speed}=data.wind;
        let city=document.querySelector('.city');
        let temperature=document.querySelector('.temp');
        let desc=document.querySelector('.description');
        let hum=document.querySelector('.humidity');
        let wind=document.querySelector('.wind');
        let icone=document.querySelector('.icon');
        city.textContent=`Weather in ${name}`;
        temperature.textContent=`${temp}°C `;
        desc.textContent=`${description} `;
        hum.textContent=`Humidity: ${humidity}%`
        wind.textContent=`Wind Speed:${speed}Km/hr`

    }
};

document.querySelector('.search button').addEventListener('click',()=>{
    weather.fetchWeather(document.querySelector('.search-bar').value);
})
document.querySelector('.search-bar').addEventListener('keypress',(e)=>{
    if(e.key==='Enter')
    weather.fetchWeather(document.querySelector('.search-bar').value);
})
weather.fetchWeather('jamshedpur');


