function createMoreTodayInfoCard(wind, humidity, uv) {
  let wrapper = document.createElement("div");
  let windDisplay = document.createElement("div");
  let humidityDisplay = document.createElement("div");
  let uvDisplay = document.createElement("div");

  wrapper.classList.add("wrapper", "more", "today", "info");

  // TODO: Add units decider whether km or miles since it is known
  windDisplay.textContent = `Wind: ${wind}`;
  humidityDisplay.textContent = `Humidity: ${humidity}`;
  uvDisplay.textContent = `UV: ${uv}`;

  wrapper.append(windDisplay, humidityDisplay, uvDisplay);

  return wrapper;
}

export default createMoreTodayInfoCard;
