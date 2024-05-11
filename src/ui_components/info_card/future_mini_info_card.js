import createMiniInfoCard from "./mini_info_card";

function createFutureMiniInfoCard(
  condition,
  minTemp,
  maxTemp,
  dayOfWeek,
  imgURL
) {
  let card = createMiniInfoCard(condition, minTemp, maxTemp, imgURL);
  let dayOfWeekDisplay = document.createElement("h3");
  let pic = card.querySelector("div.pic");

  dayOfWeekDisplay.textContent = dayOfWeek;
  dayOfWeekDisplay.classList.add("day-of-week");

  card.insertBefore(dayOfWeekDisplay, pic);

  return card;
}

export default createFutureMiniInfoCard;
