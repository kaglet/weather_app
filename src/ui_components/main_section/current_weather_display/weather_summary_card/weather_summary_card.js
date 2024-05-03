function createWeatherSummaryCard() {
  let wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  let weatherIcon = document.createElement("div");
  weatherIcon.classList.add("weather", "icon", "placeholder");
  let weatherSummary = document.createElement("p");

  wrapper.append(weatherIcon, weatherSummary);

  return wrapper;
}

export default createWeatherSummaryCard;
