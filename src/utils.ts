// src/utils.ts

import axios from 'axios';
import { LocationResponse, Location, WeatherResponse } from "./types";



export function getLocation(locationName: string): Promise<LocationResponse> {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1`;
    return axios.get(url).then((response) => response.data);
}

export function getCurrentWeather(locationDetails:Location): Promise<WeatherResponse>{
   const url =  `https://api.open-meteo.com/v1/forecast?latitude=${locationDetails.latitude}&longitude=${locationDetails.longitude}&current_weather=true&models=icon_global`;
   return axios.get(url).then(response => response.data);
}

export function displayLocation(locationDetails: Location){
const cityElm = document.getElementById('location-name')as HTMLElement;
cityElm.innerText= locationDetails.name;

const countryElm= document.getElementById('country')as HTMLElement;
countryElm.innerText= locationDetails.country;
}


export function displayWeatherData(obj:WeatherResponse){
const temperatureElm = document.getElementById('temperature') as HTMLElement;
temperatureElm.innerText = 'Temperature : obj.current_weather.temperature + obj.current_weather_units.temperature ';

const windSpeedElm = document.getElementById('windspeed') as HTMLElement;
windSpeedElm.innerText= 'Windspeed: obj.current_weather.windspeed + obj.current_weather_units.windspeed';

const windElm = document.getElementById('winddirection') as HTMLElement;
windElm.innerText = 'Winddirection: obj.current_weather.winddirection+obj.current_weather_units.winddirection';
}