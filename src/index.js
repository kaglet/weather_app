// Template code is for testing and example import purposes

import "./styles.css";
import exampleImage from "Images/ahtziri-lagarde-4_FsMDmCc6A-unsplash.jpg";

import {
  fetchWeatherByLocation,
  getCitiesStartingWith,
} from "./api_requests/weather";

function component() {
  const element = document.createElement("div");

  element.classList.add("test");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = exampleImage;

  element.append("Hi", myIcon);

  return element;
}

function testWeather() {
  getCitiesStartingWith("L")
    .then((result) => console.log(result))
    .catch(alert);
  fetchWeatherByLocation("Johannesburg")
    .then((result) => console.log(result))
    .catch(alert);
}

testWeather();

document.body.appendChild(component());
