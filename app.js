let btn = document.getElementById("btn");
let place = document.getElementById("place");
let mxtemp = document.getElementById("mxtemp");
let temp = document.getElementById("temp");
let mntemp = document.getElementById("mntemp");
let windeg = document.getElementById("windeg");
let humidit = document.getElementById("humidit");
let windspeed = document.getElementById("windspeed");
let srtime = document.getElementById("srtime");
let sstime = document.getElementById("sstime");
let cityName = document.getElementById("cityName");

const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'f244e70a09msh8aaad9c9feeea3dp1e3ed6jsn4a52d13fb359',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

btn.addEventListener("click", function () { 
    apicall(place.value);
});
async function apicall(city){
    try {
        cityName.innerText = city;
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const response = await fetch(url, options);
        const result = await response.json();
        temp.innerText = result.temp;
        mxtemp.innerText = result.max_temp;
        mntemp.innerText = result.min_temp;
        windeg.innerText = result.wind_degrees;
        humidit.innerText = result.humidity;
        windspeed.innerText = result.wind_speed;
        srtime.innerText = result.sunrise;
        sstime.innerText = result.sunset;
    } catch (error) {
        console.error(error);
    }
}