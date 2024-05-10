import storageManager from "../../../in_session_storage/in_session_storage";
import createFutureMiniInfoCard from "../../info_card/future_mini_info_card";
import { format } from "date-fns";

// TODO: Create a base card that you extend further like you already did with the current cards - for future vs current summary card
// This is to fix the card where I have a blank parameter passed through, because one needs a current temperature and the other doesn't
// This goes in conjunction with the summary objects
function updateFutureWeatherCard() {
  let futureWeatherCard = document.querySelector(".future.weather.card");
  let futureWeatherArray = storageManager.getForecastData();

  for (let i = 1; i < 8; i++) {
    let miniCard = createFutureMiniInfoCard(
      futureWeatherArray[i].text,
      futureWeatherArray[i].mintemp_c,
      futureWeatherArray[i].maxtemp_c,
      format(new Date(futureWeatherArray[i].date), "cccc"),
      futureWeatherArray[i].imageURL
    );

    futureWeatherCard.append(miniCard);
  }
}

export default updateFutureWeatherCard;
