const ftoc = function(temperatureInFahrenheit) {
  return Math.round(((temperatureInFahrenheit - 32) / 1.8) * 10) / 10;
};

const ctof = function(temperatureInCelcius) {
  return Math.round((temperatureInCelcius * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
