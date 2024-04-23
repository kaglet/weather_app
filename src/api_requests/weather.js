// API Key:
const API_KEY = "bae835189d75464b96f82826241704";

// Fetch from weather api using their error codes to inform request rejections not explicitly detected as errors
const tryFetch = async function tryFetch(requestString) {
  let response = await fetch(requestString, { mode: "cors" });
  // Custom handle errors by generating a promise reject during our specifications not implicit specifications
  if (response.status !== 200) {
    return Promise.reject(response);
  } else {
    let jsonResponse = await response.json();

    return jsonResponse;
  }
};

const fetchWeatherByLocation = function fetchWeatherByLocation(location) {
  return tryFetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
  );
};

const getCitiesStartingWith = function getCitiesStartingWith(citySearchString) {
  return tryFetch(
    `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${citySearchString}`
  );
};

export { fetchWeatherByLocation, getCitiesStartingWith };
