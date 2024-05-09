import weatherConditions from "./weather_conditions";

let iconRetriever = (function iconRetriever() {
  const decideDayNightVersion = () => {
    let timeIsDay = new Date().getHours() < 18 && new Date().getHours() > 5;
    if (timeIsDay) {
      return "day";
    } else {
      return "night";
    }
  };

  const mapCodeToIcon = (code) => {
    let iconNumber = weatherConditions.find((obj) => obj.code === code).icon;

    return iconNumber;
  };

  const getIcon = async (code) => {
    let timeString = decideDayNightVersion();
    let iconNumber = mapCodeToIcon(code);
    let incompletePath = "./src/assets/weather_icons/";
    let completePath = incompletePath + timeString + "/" + iconNumber + ".png";

    return completePath;
  };

  return { getIcon };
})();

export default iconRetriever;
