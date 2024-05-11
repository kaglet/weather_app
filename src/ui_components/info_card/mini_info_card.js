function createMiniInfoCard(condition, minTemp, maxTemp, imgURL) {
  let card = document.createElement("div");
  let pic = document.createElement("div");
  let conditionDisplay = document.createElement("p");
  let minTempDisplay = document.createElement("span");
  let maxTempDisplay = document.createElement("span");
  let separatorDisplay = document.createElement("span");
  let minMaxTempsWrapper = document.createElement("div");

  card.classList.add("mini", "info", "card");
  minMaxTempsWrapper.classList.add("min-max", "wrapper");

  // TODO: Map background picture based off condition
  pic.classList.add("pic");
  pic.style.backgroundImage = `url(${imgURL})`;
  conditionDisplay.textContent = condition;
  minTempDisplay.textContent = minTemp + "°C";
  separatorDisplay.textContent = "-";
  maxTempDisplay.textContent = maxTemp + "°C";

  minMaxTempsWrapper.append(minTempDisplay, separatorDisplay, maxTempDisplay);

  card.append(pic, conditionDisplay, minMaxTempsWrapper);

  return card;
}

export default createMiniInfoCard;
