import { displayLocation, displayWeatherData, getCurrentWeather, getLocation } from "./utils";

// src/main.ts
const form = document.getElementById('weather-form') as HTMLFormElement;

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    const locationInput = document.getElementById("location") as HTMLInputElement;
    console.log(`The user has submitted the form and is searching for a location with this name ${locationInput.value}`)

    getLocation(locationInput.value)
.then((response) => {
    if(response.results) {
        const location = response.results[0];

        displayLocation(location);
        return getCurrentWeather(location);
    } else {
        throw new Error('No Location found')
    }
})
.then((weatherData) => {
    displayWeatherData(weatherData)
})
.catch ((error) => {
    console.log("Error getting weather data" , error);
})
})