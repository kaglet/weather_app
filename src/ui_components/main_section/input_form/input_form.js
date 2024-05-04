import dataProcessor from "../../../api_data_processing/data_processor";
import weatherDataRequester from "../../../api_requests/weather";
import loadController from "../../loading/loading_control";

// Search
// Get location
// Tied to input but can be used separately e.g. input by press of enter key

async function getWeatherWithLocation(location) {
  // Nothing that this is doing that is not already done, call the other function if needed, you can wait for this before continuing to call UI changes too
  // Use async function in another async function then
  // The result is that of the promise if no `then` is placed on it

  // After this awaited data is fetched remove loading bar
  loadController.stopLoading();

  return weather;
}

function getCitiesWithLocation(location) {}

function listenForUserInput(searchButton, locationInput) {
  searchButton.addEventListener("click", async () => {
    loadController.startLoading();
    let location = locationInput.value;
    let weather = await weatherDataRequester.fetchWeatherByLocation(location);
  });

  locationInput.addEventListener("input", async () => {
    let location = locationInput.value;
    let locations = await weatherDataRequester.getCitiesStartingWith(location);

    // Remove loading and show in UI
  });
}

function createInputForm() {
  let form = document.createElement("form");
  let locationLabel = document.createElement("label");
  let locationInput = document.createElement("input");
  let wrapper = document.createElement("div");
  let searchButton = document.createElement("button");
  let searchIcon = document.createElement("i");

  let locationInputID = "location-input";

  locationInput.setAttribute("id", locationInputID);
  locationLabel.setAttribute("for", locationInputID);

  locationLabel.textContent = "Enter Location: ";
  locationInput.setAttribute("type", "search");

  searchButton.textContent = "Search";
  searchButton.append(searchIcon);
  searchButton.setAttribute("type", "button");
  searchIcon.classList.add("search");

  wrapper.append(locationLabel, locationInput, searchButton);
  form.append(wrapper);

  listenForUserInput(searchButton, locationInput);

  return form;
}

export { createInputForm };
