import createMiniInfoCard from "../../info_card/mini_info_card";
import createMoreTodayInfoCard from "./today_more_weather_info_card/more_today_info";

function updateCurrentWeatherCard() {
  let currWeatherCard = document.querySelector(".current.weather.card");
  let todayTitle = document.createElement("h2");
  let todayDate = document.createElement("h3");
  let miniCard = createMiniInfoCard("cold", "34", "37", "Tuesday");
  let moreInfo = createMoreTodayInfoCard("high wind", "low uv");
  todayTitle.textContent = "Today";
  let today = new Date();
  todayDate.textContent = today.toDateString();

  currWeatherCard.append(todayTitle, todayDate, miniCard, moreInfo);
}

export default updateCurrentWeatherCard;
