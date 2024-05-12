import createSpinner from "./loading_spinner/create_spinner";

let loadController = (function loadController() {
  let loadingScreen = (() => {
    let loadingScreen = document.createElement("div");

    loadingScreen.classList.add("loading", "screen");
    let spinner = createSpinner();

    loadingScreen.append(spinner);

    return loadingScreen;
  })();

  const startLoading = (parent) => {
    parent.append(loadingScreen);
    loadingScreen.style.display = "block";
  };

  const stopLoading = () => {
    loadingScreen.style.display = "none";
  };

  return { startLoading, stopLoading };
})();

export default loadController;
