import storageManager from "../in_session_storage/in_session_storage";

let displayController = (function () {
  const displayWeatherDetails = () => {
    console.log(storageManager.getTodayData());
  };

  const displayFutureWeather = () => {
    console.log(storageManager.getForecastData());
  };

  const displayLocations = (locations) => {
    console.log(locations);
  };

  return { displayWeatherDetails, displayFutureWeather, displayLocations };
})();

export default displayController;
