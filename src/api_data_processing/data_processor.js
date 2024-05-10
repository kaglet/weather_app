import futureDayWeatherSummary from "./create_future_summary.js";
import todayWeatherSummary from "./create_today_summary.js";

// Gives only relevant data back in a relevant unified, reusable format for the program
let dataProcessor = (function dataProcessor() {
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
      uv: currentConditions.uv,
    };

    let processedFutureWeather = futureWeather.forecast.forecastday.map(
      (dayData) =>
        new futureDayWeatherSummary(
          dayData.day.condition.text,
          dayData.day.condition.code,
          dayData.day.mintemp_c,
          dayData.day.mintemp_f,
          dayData.day.maxtemp_c,
          dayData.day.maxtemp_f,
          dayData.date
        )
    );

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
