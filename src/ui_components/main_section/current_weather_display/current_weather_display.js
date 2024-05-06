import createMiniInfoCard from "../../info_card/info_card.js";
import createMoreTodayInfoCard from "./today_more_weather_info_card/weather_summary_card";

function createCurrWeatherCard() {
  let currWeatherCard = document.createElement("section");
  let todayTitle = document.createElement("h2");
  let todayDate = document.createElement("h3");
  let miniCard = createMiniInfoCard("cold", "34", "37", "Tuesday");
  let moreInfo = createMoreTodayInfoCard();

  currWeatherCard.classList.add("current", "weather", "card");

  todayTitle.textContent = "Today";
  let today = new Date();
  todayDate.textContent = today.toDateString();

  currWeatherCard.append(todayTitle, todayDate, miniCard, moreInfo);

  return currWeatherCard;
}

export default createCurrWeatherCard;
