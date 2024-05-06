function createMoreTodayInfoCard(wind, uv) {
  let wrapper = document.createElement("div");
  let windDisplay = document.createElement("div");
  let uvDisplay = document.createElement("div");

  wrapper.classList.add("wrapper");

  windDisplay.textContent = wind;
  uvDisplay.textContent = uv;

  wrapper.append(windDisplay, uvDisplay);

  return wrapper;
}

export default createMoreTodayInfoCard;
