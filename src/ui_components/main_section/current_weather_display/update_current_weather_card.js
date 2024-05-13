import storageManager from "../../../in_session_storage/in_session_storage";
import createCurrentMiniInfoCard from "../../info_card/current_mini_info_card";
import createMoreTodayInfoCard from "./today_more_weather_info_card/more_today_info";

function updateCurrentWeatherCard() {
  let currWeatherCard = document.querySelector(".current.weather.card");
  let todayTitle = document.createElement("h2");
  let todayDate = document.createElement("h3");
  let locationDisplay = document.createElement("section");
  let topDetailsWrapper = document.createElement("div");
  let miniCard = createCurrentMiniInfoCard(
    storageManager.getTodayData().summary.text,
    storageManager.getTodayData().summary.mintemp_c,
    storageManager.getTodayData().summary.maxtemp_c,
    storageManager.getTodayData().summary.temp_c,
    storageManager.getTodayData().summary.imageURL
  );
  let moreInfo = createMoreTodayInfoCard(
    storageManager.getTodayData().extras.wind_kph,
    storageManager.getTodayData().extras.humidity,
    storageManager.getTodayData().extras.uv
  );
  todayTitle.textContent = "Today";
  todayTitle.classList.add("today");
  let today = new Date();
  todayDate.textContent = today.toDateString();
  todayDate.classList.add("today");

  locationDisplay.classList.add("location", "display");

  locationDisplay.textContent = `${
    storageManager.getTodayData().simplifiedLocation.name
  }, ${storageManager.getTodayData().simplifiedLocation.region}, ${
    storageManager.getTodayData().simplifiedLocation.country
  }`;

  topDetailsWrapper.append(todayTitle, todayDate);
  topDetailsWrapper.classList.add("wrapper", "top-details");

  currWeatherCard.append(
    topDetailsWrapper,
    locationDisplay,
    miniCard,
    moreInfo
  );
}

export default updateCurrentWeatherCard;
