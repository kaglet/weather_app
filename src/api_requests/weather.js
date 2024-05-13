// API Key:
const API_KEY = "bae835189d75464b96f82826241704";

const weatherDataRequester = (() => {
  // Fetch from weather api using their error codes to inform request rejections not explicitly detected as errors
  async function tryFetch(requestString) {
    let response = await fetch(requestString, { mode: "cors" });
    // Custom handle errors by generating a promise reject during our specifications not implicit API specifications
    if (response.status !== 200) {
      return Promise.reject(response);
    } else {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  }

  function fetchFutureWeatherByLocation(location) {
    return tryFetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`
    );
  }

  function getCitiesStartingWith(citySearchString) {
    return tryFetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${citySearchString}`
    );
  }

  return {
    fetchFutureWeatherByLocation,
    getCitiesStartingWith,
  };
})();

export default weatherDataRequester;
