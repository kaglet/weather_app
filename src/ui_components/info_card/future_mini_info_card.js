import createMiniInfoCard from "./mini_info_card";

function createFutureMiniInfoCard(
  condition,
  minTemp,
  maxTemp,
  dayOfWeek,
  imgURL
) {
  let card = createMiniInfoCard(condition, minTemp, maxTemp, dayOfWeek, imgURL);
  let dayOfWeekDisplay = document.createElement("p");
  let pic = card.querySelector("div.pic");

  dayOfWeekDisplay.textContent = dayOfWeek;

  card.insertBefore(dayOfWeekDisplay, pic);

  return card;
}

export default createFutureMiniInfoCard;
