import dataProcessor from "../../../api_data_processing/data_processor.js";
import weatherDataRequester from "../../../api_requests/weather.js";
import storageManager from "../../../in_session_storage/in_session_storage.js";
import dropdownController from "../../dropdown/create_dropdown.js";
import loadController from "../../loading/loading_control.js";
import displayController from "../../ui_controller.js";
import clearCurrentWeatherCard from "../current_weather_display/clear_current_weather_card.js";
import clearFutureWeatherCard from "../future_forecast_display/clear_future_weather_card.js";

function listenForUserInput(searchButton, locationInput, form) {
  const completeWeatherSearchProcedure = async () => {
    let location = locationInput.value;
    let loadingParent = document.querySelector(".current.weather.card");
    if (location === "") return;

    dropdownController.hideDropdown();
    clearCurrentWeatherCard();
    clearFutureWeatherCard();
    loadController.startLoading(loadingParent);

    try {
      let futureWeather =
        await weatherDataRequester.fetchFutureWeatherByLocation(location);
      console.log(futureWeather);
      let { processedTodayWeather, processedFutureWeather } =
        dataProcessor.processWeatherFeedback(futureWeather);

      loadController.stopLoading(loadingParent);
      storageManager.storeForecastData(processedFutureWeather);
      storageManager.storeTodayData(processedTodayWeather);

      displayController.displayWeatherDetails(storageManager.getTodayData());
      displayController.displayFutureWeather(storageManager.getForecastData());
    } catch (error) {
      console.error(error);
    }
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
}

export default listenForUserInput;
