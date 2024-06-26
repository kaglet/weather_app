import dropdownController from "./dropdown/create_dropdown";
import clearCurrentWeatherCard from "./main_section/current_weather_display/clear_current_weather_card";
import updateCurrentWeatherCard from "./main_section/current_weather_display/update_current_weather_card";
import clearFutureWeatherCard from "./main_section/future_forecast_display/clear_future_weather_card";
import updateFutureWeatherCard from "./main_section/future_forecast_display/update_future_weather_card";

let displayController = (function () {
  const displayWeatherDetails = () => {
    clearCurrentWeatherCard();
    updateCurrentWeatherCard();
  };

  const displayFutureWeather = () => {
    clearFutureWeatherCard();
    updateFutureWeatherCard();
  };

  const displayLocations = (locations) => {
    dropdownController.clearDropdown();
    dropdownController.showDropdown();
    dropdownController.populateDropdown(locations);
    console.log(locations);
  };

  return { displayWeatherDetails, displayFutureWeather, displayLocations };
})();

export default displayController;
