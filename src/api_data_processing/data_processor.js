import weatherSummary from "./create_summary_object.js";
import todayWeatherSummary from "./create_today_summary.js";

// Gives only relevant data back to program
let dataProcessor = (function dataProcessor() {
  // TODO: Create different summary objects and display cards because one needs a current temperature and the other doesn't
  // They can extend from the same base perhaps is my solution both for this and the card where I have a blank parameter passed through

  // Extract required weather data on object
  const processWeatherFeedback = (futureWeather) => {
    let currentConditions = futureWeather.current;
    let location = futureWeather.location;

    let summary = new todayWeatherSummary(
      currentConditions.condition.text,
      currentConditions.condition.code,
      currentConditions.feelslike_c,
      currentConditions.feelslike_f,
      futureWeather.forecast.forecastday[0].day.mintemp_c,
      futureWeather.forecast.forecastday[0].day.mintemp_f,
      futureWeather.forecast.forecastday[0].day.maxtemp_c,
      futureWeather.forecast.forecastday[0].day.maxtemp_f
    );

    let simplifiedLocation = {
      name: location.name,
      region: location.region,
      country: location.country,
    };

    let extras = {
      wind_kph: currentConditions.wind_kph,
      wind_mph: currentConditions.wind_mph,
      humidity: currentConditions.humidity,
    };

    let processedFutureWeather = futureWeather.forecast.forecastday;

    let processedTodayWeather = {
      summary,
      extras,
      simplifiedLocation,
    };

    return {
      processedTodayWeather,
      processedFutureWeather,
    };
  };

  // Extract required data from array of locations
  const processLocationArray = (arr) => {
    let arrOfNames = arr.map(
      (location) => `${location.name}, ${location.region}, ${location.country}`
    );
    return arrOfNames;
  };

  return { processLocationArray, processWeatherFeedback };
})();

export default dataProcessor;
