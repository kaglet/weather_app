function createMiniInfoCard(
  condition,
  minTemp,
  maxTemp,
  dayOfWeek,
  currentTemp
) {
  let card = document.createElement("div");
  let pic = document.createElement("div");
  let conditionDisplay = document.createElement("p");
  let dayOfWeekDisplay = document.createElement("p");
  let minTempDisplay = document.createElement("p");
  let maxTempDisplay = document.createElement("p");
  let currentTempDisplay = document.createElement("p");
  let minMaxTempsWrapper = document.createElement("div");

  card.classList.add("mini", "info", "card");
  minMaxTempsWrapper.classList.add("min-max", "wrapper");

  // TODO: Map background picture based off condition
  pic.classList.add("pic");
  pic.style.backgroundImage = "";
  conditionDisplay.textContent = condition;
  minTempDisplay.textContent = minTemp;
  maxTempDisplay.textContent = maxTemp;
  dayOfWeekDisplay.textContent = dayOfWeek;
  currentTempDisplay.textContent = currentTemp;

  minMaxTempsWrapper.append(minTempDisplay, maxTempDisplay);

  card.append(
    pic,
    currentTempDisplay,
    minMaxTempsWrapper,
    conditionDisplay,
    dayOfWeekDisplay
  );

  return card;
}

export default createMiniInfoCard;
