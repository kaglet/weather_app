function createMoreTodayInfoCard(wind, humidity, uv) {
  let wrapper = document.createElement("div");
  let windLabel = document.createElement("label");
  let humidityLabel = document.createElement("label");
  let uvLabel = document.createElement("label");
  let humidityIconDisplay = document.createElement("span");
  let windIconDisplay = document.createElement("span");
  let uvIconDisplay = document.createElement("span");
  let windValueDisplay = document.createElement("span");
  let humidityValueDisplay = document.createElement("span");
  let uvValueDisplay = document.createElement("span");

  wrapper.classList.add("wrapper", "more", "today", "info");

  humidityValueDisplay.setAttribute("id", "humidity-value");
  windValueDisplay.setAttribute("id", "wind-value");
  uvValueDisplay.setAttribute("id", "uv-value");

  // TODO: Add units decider whether km or miles since it is known
  humidityIconDisplay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FBFD"><path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/></svg>`;
  humidityLabel.append(`Humidity: `);
  humidityLabel.setAttribute("for", humidityValueDisplay.getAttribute("id"));
  humidityValueDisplay.append(`${humidity}%`);

  windIconDisplay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg>`;
  windLabel.append(`Wind: `);
  windLabel.setAttribute("for", windValueDisplay.getAttribute("id"));
  windValueDisplay.append(`${wind} km/h`);

  uvIconDisplay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M40-440v-80h240v80H40Zm270-154-84-84 56-56 84 84-56 56Zm130-86v-240h80v240h-80Zm210 86-56-56 84-84 56 56-84 84Zm30 154v-80h240v80H680Zm-200 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm198 134-84-84 56-56 84 84-56 56Zm-396 0-56-56 84-84 56 56-84 84ZM440-40v-240h80v240h-80Z"/></svg>`;
  uvLabel.append(`UV: `);
  uvLabel.setAttribute("for", uvValueDisplay.getAttribute("id"));
  uvValueDisplay.append(`${uv}`);

  wrapper.append(
    windIconDisplay,
    windLabel,
    windValueDisplay,
    humidityIconDisplay,
    humidityLabel,
    humidityValueDisplay,
    uvIconDisplay,
    uvLabel,
    uvValueDisplay
  );

  return wrapper;
}

export default createMoreTodayInfoCard;
