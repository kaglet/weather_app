import storageManager from "../../../../in_session_storage/in_session_storage";
import displayController from "../../../ui_controller";
import preferencesManager from "../preferences";

function toggle() {
  if (preferencesManager.getTemperaturePreference() === "C") {
    preferencesManager.setTemperaturePreference("F");
    document.querySelector(
      ".toggle.temperature"
    ).textContent = `°${preferencesManager.getTemperaturePreference()}`;

    // Display only if cards are present for switching else return with saved preference only
    if (storageManager.getTodayData() === undefined) return;

    // Call update cards display procedure with different dynamically set and managed parameters
    displayController.displayWeatherDetails(storageManager.getTodayData());
    displayController.displayFutureWeather(storageManager.getForecastData());
  } else {
    preferencesManager.setTemperaturePreference("C");
    document.querySelector(
      ".toggle.temperature"
    ).textContent = `°${preferencesManager.getTemperaturePreference()}`;

    // Display only if cards are present for switching else return with saved preference only
    if (storageManager.getTodayData() === undefined) return;

    // Call update cards display procedure with different dynamically set and managed parameters
    displayController.displayWeatherDetails(storageManager.getTodayData());
    displayController.displayFutureWeather(storageManager.getForecastData());
  }
}

export default toggle;
