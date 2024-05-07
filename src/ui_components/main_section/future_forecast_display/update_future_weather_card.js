import storageManager from "../../../in_session_storage/in_session_storage";
import createMiniInfoCard from "../../info_card/mini_info_card";
import { format } from "date-fns";

function updateFutureWeatherCard() {
  let futureWeatherCard = document.querySelector(".future.weather.card");
  let futureWeatherArray = storageManager.getForecastData();

  for (let i = 1; i < 4; i++) {
    let miniCard = createMiniInfoCard(
      futureWeatherArray[i].day.condition.text,
      futureWeatherArray[i].day.mintemp_c,
      futureWeatherArray[i].day.maxtemp_c,
      format(new Date(futureWeatherArray[i].date), "cccc"),
      ""
    );

    futureWeatherCard.append(miniCard);
  }
}

export default updateFutureWeatherCard;
