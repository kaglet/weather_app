// Controls and manages a given dropdown

let dropdownController = (function dropdownController() {
  const dropdown = (() => {
    let dropdown = document.createElement("ul");
    dropdown.classList.add("dropdown");

    return dropdown;
  })();

  const clearDropdown = () => {
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.lastChild);
    }
  };

  const fillInputFromDropdown = (itemDisplay) => {
    document.querySelector("input#location-input").value =
      itemDisplay.textContent;
  };

  const populateDropdown = (items) => {
    items.forEach((item) => {
      let itemDisplay = document.createElement("li");
      itemDisplay.textContent = item;
      itemDisplay.addEventListener("click", () =>
        fillInputFromDropdown(itemDisplay)
      );

      dropdown.append(itemDisplay);
    });
  };

  const hideDropdown = () => {
    dropdown.style.display = "none";
  };

  const showDropdown = () => {
    document.querySelector(".location.input.wrapper").append(dropdown);
    dropdown.style.display = "block";
  };

  return { populateDropdown, clearDropdown, showDropdown, hideDropdown };
})();

export default dropdownController;
