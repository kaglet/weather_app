// Gives only relevant data back to program
let dataProcessor = (function dataProcessor() {
  // Extract required weather data on object
  // No need to process yet, so for now virtually the same object is returned
  const processLocationObject = (object) => {
    let simplifiedObj = {};
    for (const key in object) {
      simplifiedObj[key] = object[key];
    }

    return simplifiedObj;
  };

  // Extract required data from array of locations
  const processLocationArray = (arr) => {
    let arrOfNames = arr.map(
      (location) => `${location.name}, ${location.region}, ${location.country}`
    );
    return arrOfNames;
  };

  return { processLocationArray, processLocationObject };
})();

export default dataProcessor;
