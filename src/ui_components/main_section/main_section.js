import createCurrWeatherCard from "./current_weather_display/current_weather_display";
import createFutureForecastDisplay from "./future_forecast_display/future_forecast_display";
import createInputForm from "./input_form/input_form";

function createMainSection() {
  let mainSection = document.createElement("section");
  mainSection.classList.add("main");
  mainSection.append(
    createInputForm(),
    createCurrWeatherCard(),
    createFutureForecastDisplay()
  );

  return mainSection;
}

export default createMainSection;
