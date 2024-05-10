import { dayImages, nightImages } from "../dynamic_imports/dynamic_imports";
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

    return +iconNumber;
  };

  const searchForIcon = (iconNumber, timeString) => {
    let completePath;
    if (timeString === "day") {
      completePath = dayImages.find(
        (image) => image.number === iconNumber
      ).imageURL;
    } else {
      completePath = nightImages.find(
        (image) => image.number === iconNumber
      ).imageURL;
    }

    return completePath;
  };

  const getIcon = (code) => {
    let timeString = decideDayNightVersion();
    let iconNumber = mapCodeToIcon(code);
    let completePath = searchForIcon(iconNumber, timeString);

    console.log("Day images", dayImages);
    console.log("Night images", nightImages);

    return completePath;
  };

  return { getIcon };
})();

export default iconRetriever;
