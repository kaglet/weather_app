import storageManager from "../../../in_session_storage/in_session_storage";
import createMiniInfoCard from "../../info_card/mini_info_card";
import { format } from "date-fns";

function updateFutureWeatherCard() {
  let futureWeatherCard = document.querySelector(".future.weather.card");
  let futureWeatherArray = storageManager.getForecastData();

  for (let i = 1; i < 4; i++) {
    let miniCard = createMiniInfoCard(
      futureWeatherArray[i].text,
      futureWeatherArray[i].mintemp_c,
      futureWeatherArray[i].maxtemp_c,
      format(new Date(futureWeatherArray[i].date), "cccc"),
      "",
      // TODO: Give image url to future data, should be an extra custom property, or have today object data on each day with this guaranteed
      // SHould be an innate property not one that is transformed here
      // Do when saving future data, transform it as well not just for current day
      futureWeatherArray[i].imageURL
    );

    futureWeatherCard.append(miniCard);
  }
}

export default updateFutureWeatherCard;
