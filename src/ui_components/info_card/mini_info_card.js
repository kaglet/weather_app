function createMiniInfoCard(condition, minTemp, maxTemp, imgURL) {
  let card = document.createElement("div");
  let pic = document.createElement("div");
  let conditionDisplay = document.createElement("p");
  let minTempDisplay = document.createElement("span");
  let maxTempDisplay = document.createElement("span");
  let minMaxTempsWrapper = document.createElement("div");
  let downArrowIcon = document.createElement("span");
  let upArrowIcon = document.createElement("span");

  card.classList.add("mini", "info", "card");
  minMaxTempsWrapper.classList.add("min-max", "wrapper");

  // TODO: Map background picture based off condition
  pic.classList.add("pic");
  pic.style.backgroundImage = `url(${imgURL})`;
  conditionDisplay.textContent = condition;

  downArrowIcon.classList.add("down-arrow");
  upArrowIcon.classList.add("up-arrow");
  downArrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>`;
  upArrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F9DB78"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>`;
  minTempDisplay.append(downArrowIcon, minTemp + "°C");
  maxTempDisplay.append(upArrowIcon, maxTemp + "°C");

  minMaxTempsWrapper.append(minTempDisplay, maxTempDisplay);

  card.append(pic, conditionDisplay, minMaxTempsWrapper);

  return card;
}

export default createMiniInfoCard;
