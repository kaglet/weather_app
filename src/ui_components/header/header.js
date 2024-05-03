import createSelfCredits from "./credits/self_credits";

function createHeader() {
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  let credits = createSelfCredits();
  h1.textContent = "Weather App";

  header.append(h1, credits);

  return header;
}

export default createHeader;
