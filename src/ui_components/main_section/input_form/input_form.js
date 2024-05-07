import dataProcessor from "../../../api_data_processing/data_processor.js";
import weatherDataRequester from "../../../api_requests/weather.js";
import storageManager from "../../../in_session_storage/in_session_storage.js";
import loadController from "../../loading/loading_control.js";
import displayController from "../../ui_controller.js";

function listenForUserInput(searchButton, locationInput, form) {
  const completeWeatherSearchProcedure = async () => {
    let location = locationInput.value;
    if (location === "") return;

    loadController.startLoading();
    let futureWeather = await weatherDataRequester.fetchFutureWeatherByLocation(
      location
    );
    let { processedTodayWeather, processedFutureWeather } =
      dataProcessor.processWeatherFeedback(futureWeather);

    loadController.stopLoading();
    storageManager.storeForecastData(processedFutureWeather);
    storageManager.storeTodayData(processedTodayWeather);
    displayController.displayWeatherDetails(storageManager.getTodayData());
    displayController.displayFutureWeather(storageManager.getForecastData());

    // TODO: Remove loading and show in UI
  };

  const completeLocationSearchProcedure = async () => {
    let location = locationInput.value;
    if (location === "") return;

    let locations = await weatherDataRequester.getCitiesStartingWith(location);
    let processedData = dataProcessor.processLocationArray(locations);
    displayController.displayLocations(processedData);
  };

  searchButton.addEventListener("click", completeWeatherSearchProcedure);

  locationInput.addEventListener("input", completeLocationSearchProcedure);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    completeWeatherSearchProcedure();
  });

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
  searchButton.setAttribute("type", "submit");
  searchIcon.classList.add("search");

  wrapper.append(locationLabel, locationInput, searchButton);
  form.append(wrapper);

  listenForUserInput(searchButton, locationInput, form);

  return form;
}

export { createInputForm };
