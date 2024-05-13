let dropdownController = (function dropdownController() {
  const createDropdown = (parent, ...args) => {
    let dropdown = document.createElement("ul");
    dropdown.classList.add(...args);

    parent.append(dropdown);

    return dropdown;
  };

  const clearDropdown = (dropdown) => {
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.lastChild);
    }
  };

  const fillInputFromDropdown = (itemDisplay) => {
    document.querySelector("input#location-input").value =
      itemDisplay.textContent;
  };

  const populateDropdown = (items, dropdown) => {
    items.forEach((item) => {
      let itemDisplay = document.createElement("li");
      itemDisplay.textContent = item;
      itemDisplay.addEventListener("click", () =>
        fillInputFromDropdown(itemDisplay)
      );

      dropdown.append(itemDisplay);
    });
  };

  const hideDropdown = (dropdown) => {
    dropdown.style.display = "none";
  };

  const showDropdown = (dropdown) => {
    dropdown.style.display = "block";
  };

  return {
    createDropdown,
    populateDropdown,
    clearDropdown,
    showDropdown,
    hideDropdown,
  };
})();

export default dropdownController;
