import dropdownController from "./dropdown/create_dropdown";

function createHiddenComponents() {
  dropdownController.createDropdown(
    document.querySelector(".location.input.wrapper"),
    "locations",
    "dropdown"
  );

  dropdownController.createDropdown(
    document.querySelector(".settings.icon.wrapper"),
    "settings",
    "dropdown"
  );

  // TODO: create next dropdown and populate with static list
}

export default createHiddenComponents;
