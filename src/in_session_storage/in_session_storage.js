let storageManager = (function storageManager() {
  let forecastData, todayData;
  const storeForecastData = (data) => {
    forecastData = data;
  };

  const storeTodayData = (data) => {
    todayData = data;
  };

  const getForecastData = () => forecastData;

  const getTodayData = () => todayData;

  return { storeForecastData, storeTodayData, getForecastData, getTodayData };
})();

export default storageManager;
