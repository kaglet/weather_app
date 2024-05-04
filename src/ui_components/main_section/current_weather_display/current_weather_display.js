import createInfoCard from "./info_card/info_card";
import createWeatherSummaryCard from "./weather_summary_card/weather_summary_card";

function createMoreDetailsCard() {
  let moreDetailsCard = document.createElement("section");
  // TODO: For each number of datapoints in decided array get or create a card
  // Nice to keep it in one place so it is more dynamic
  let moreInfoExample = createInfoCard();
  moreInfoExample.textContent = "Example Info";
  moreDetailsCard.append(moreInfoExample);

  return moreDetailsCard;
}

function createCurrWeatherCard() {
  let currWeatherCard = document.createElement("section");
  let todayTitle = document.createElement("h2");
  let todayDate = document.createElement("h3");
  let moreInfo = createMoreDetailsCard();
  let weatherSummary = createWeatherSummaryCard();

  currWeatherCard.classList.add("current", "weather", "card");

  todayTitle.textContent = "Today";
  let today = new Date();
  todayDate.textContent = today.toDateString();

  currWeatherCard.append(todayTitle, todayDate, weatherSummary, moreInfo);

  return currWeatherCard;
}

export default createCurrWeatherCard;
