import storageManager from "../in_session_storage/in_session_storage";
import createMiniInfoCard from "./info_card/info_card";
import createMoreTodayInfoCard from "./main_section/current_weather_display/today_more_weather_info_card/more_today_info";

let displayController = (function () {
  const clearCurrentWeatherCard = () => {
    let currWeatherCard = document.querySelector(".current.weather.card");

    while (currWeatherCard.firstChild) {
      currWeatherCard.removeChild(currWeatherCard.lastChild);
    }
  };

  const updateCurrentWeatherCard = () => {
    let currWeatherCard = document.querySelector(".current.weather.card");
    let todayTitle = document.createElement("h2");
    let todayDate = document.createElement("h3");
    let miniCard = createMiniInfoCard("cold", "34", "37", "Tuesday");
    let moreInfo = createMoreTodayInfoCard("high wind", "low uv");
    todayTitle.textContent = "Today";
    let today = new Date();
    todayDate.textContent = today.toDateString();

    currWeatherCard.append(todayTitle, todayDate, miniCard, moreInfo);
  };

  const displayWeatherDetails = () => {
    clearCurrentWeatherCard();
    updateCurrentWeatherCard();

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
