let loadController = (function loadController() {
  const startLoading = function startLoading() {
    console.log("Loading started");
  };

  const stopLoading = function stopLoading() {
    console.log("Loading ended");
  };

  return { startLoading, stopLoading };
})();

export default loadController;
