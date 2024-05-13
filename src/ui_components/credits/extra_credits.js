function createExtraCredits() {
  let extraCredits = document.createElement("a");
  extraCredits.href = "https://www.weatherapi.com/";
  extraCredits.text = "WeatherAPI";
  let wrapper = document.createElement("div");
  wrapper.append("Powered by ", extraCredits);

  return wrapper;
}

export default createExtraCredits;
