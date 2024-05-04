import dataProcessor from "../../../api_data_processing/data_processor.js";
import weatherDataRequester from "../../../api_requests/weather.js";
import loadController from "../../loading/loading_control.js";
import displayController from "../../ui_controller.js";

// Search
// Get location
// Tied to input but can be used separately e.g. input by press of enter key

// Nothing that this is doing that is not already done, call the other function if needed, you can wait for this before continuing to call UI changes too
// Use async function in another async function then
// The result is that of the promise if no `then` is placed on it
// Can just do it in the click handler as an async function to wait until loading is done but other functions can function
// You can also control UI in this
// TODO: Separate this out as it is too long the functionality and store elsewhere, maybe a UI with application data module
function listenForUserInput(searchButton, locationInput) {
  const completeWeatherSearchProcedure = async () => {
    loadController.startLoading();
    let location = locationInput.value;
    let weather = await weatherDataRequester.fetchWeatherByLocation(location);
    let processedData = dataProcessor.processLocationObject(weather);
    // TODO: Get future forecast and display it too
    loadController.stopLoading();
    displayController.displayWeatherDetails(processedData);

    // TODO: Remove loading and show in UI
  };

  const completeLocationSearchProcedure = async () => {
    let location = locationInput.value;
    let locations = await weatherDataRequester.getCitiesStartingWith(location);
    let processedData = dataProcessor.processLocationArray(locations);
    displayController.displayLocations(processedData);
  };

  searchButton.addEventListener("click", completeWeatherSearchProcedure);

  locationInput.addEventListener("input", completeLocationSearchProcedure);

  // TODO: Add listener on press of enter key
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
