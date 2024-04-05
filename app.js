var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var tem = document.querySelector('.temp');

var city = document.querySelector('.city');


const sahar = document.querySelector('.search input');
const  butn = document.querySelector('.search button');


butn.addEventListener('click',()=>{
  callapi(sahar.value);
})


var apikey = "eef1c4207e6a1c694f09b32904782f87";
var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function callapi(sahar){
  const response = await fetch(apiurl + sahar + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  
tem.innerHTML = data.main.temp + "°C";
humidity.innerHTML = data.main.humidity+ "%";
wind.innerHTML = data.wind.speed + "km-hr";
city.innerHTML = data.name;
}
callapi(sahar);


