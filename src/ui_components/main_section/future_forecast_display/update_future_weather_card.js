import createMiniInfoCard from "../../info_card/mini_info_card";

function updateFutureWeatherCard() {
  let futureWeatherCard = document.querySelector(".future.weather.card");

  let miniCard1 = createMiniInfoCard("cold", "34", "37", "Wednesday");
  let miniCard2 = createMiniInfoCard("cold", "34", "37", "Thursday");
  let miniCard3 = createMiniInfoCard("cold", "34", "37", "Friday");

  futureWeatherCard.append(miniCard1, miniCard2, miniCard3);
}

export default updateFutureWeatherCard;
