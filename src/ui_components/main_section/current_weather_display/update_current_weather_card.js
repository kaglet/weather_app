import storageManager from "../../../in_session_storage/in_session_storage";
import createMiniInfoCard from "../../info_card/mini_info_card";
import createMoreTodayInfoCard from "./today_more_weather_info_card/more_today_info";
import { format } from "date-fns";

function updateCurrentWeatherCard() {
  let currWeatherCard = document.querySelector(".current.weather.card");
  let todayTitle = document.createElement("h2");
  let todayDate = document.createElement("h3");
  let miniCard = createMiniInfoCard(
    storageManager.getTodayData().summary.text,
    storageManager.getTodayData().summary.mintemp_c,
    storageManager.getTodayData().summary.maxtemp_c,
    format(new Date(), "cccc"),
    storageManager.getTodayData().summary.temp_c
  );
  let moreInfo = createMoreTodayInfoCard(
    storageManager.getTodayData().extras.wind_kph,
    storageManager.getTodayData().extras.humidity
  );
  todayTitle.textContent = "Today";
  let today = new Date();
  todayDate.textContent = today.toDateString();

  currWeatherCard.append(todayTitle, todayDate, miniCard, moreInfo);
}

export default updateCurrentWeatherCard;