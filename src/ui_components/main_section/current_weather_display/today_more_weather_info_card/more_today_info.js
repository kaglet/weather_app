function createMoreTodayInfoCard(wind, humidity) {
  let wrapper = document.createElement("div");
  let windDisplay = document.createElement("div");
  let humidityDisplay = document.createElement("div");

  wrapper.classList.add("wrapper");

  // TODO: Add units decider whether km or miles since it is known
  windDisplay.textContent = `Wind: ${wind}`;
  humidityDisplay.textContent = `Humidity: ${humidity}`;

  wrapper.append(windDisplay, humidityDisplay);

  return wrapper;
}

export default createMoreTodayInfoCard;
