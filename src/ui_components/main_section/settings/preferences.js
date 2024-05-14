let preferencesManager = (function preferencesManager() {
  let temperaturePref = "C";

  const setTemperaturePreference = (pref) => {
    temperaturePref = pref;
  };

  const getTemperaturePreference = () => temperaturePref;

  return { setTemperaturePreference, getTemperaturePreference };
})();

export default preferencesManager;
