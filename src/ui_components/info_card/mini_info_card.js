function createMiniInfoCard(condition, minTemp, maxTemp, dayOfWeek) {
  let card = document.createElement("span");
  let pic = document.createElement("div");
  let conditionDisplay = document.createElement("p");
  let dayOfWeekDisplay = document.createElement("p");
  let minTempDisplay = document.createElement("p");
  let maxTempDisplay = document.createElement("p");
  let averageTempsWrapper = document.createElement("div");

  card.classList.add("mini", "info", "card");

  // TODO: Map background picture based off condition
  pic.classList.add("pic");
  pic.style.backgroundImage = "";
  conditionDisplay.textContent = condition;
  minTempDisplay.textContent = minTemp;
  maxTempDisplay.textContent = maxTemp;
  dayOfWeekDisplay.textContent = dayOfWeek;

  averageTempsWrapper.append(minTempDisplay, maxTempDisplay);

  card.append(pic, averageTempsWrapper, conditionDisplay, dayOfWeekDisplay);

  return card;
}

export default createMiniInfoCard;
