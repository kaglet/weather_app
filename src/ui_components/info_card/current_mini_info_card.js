import createMiniInfoCard from "./mini_info_card";

function createCurrentMiniInfoCard(
  condition,
  minTemp,
  maxTemp,
  dayOfWeek,
  currentTemp,
  imgURL
) {
  let card = createMiniInfoCard(condition, minTemp, maxTemp, dayOfWeek, imgURL);
  let pic = card.querySelector("div.pic");
  let currentTempDisplay = document.createElement("p");
  currentTempDisplay.textContent = `Feels like ${currentTemp} °C`;

  card.insertBefore(currentTempDisplay, pic);

  return card;
}

export default createCurrentMiniInfoCard;
