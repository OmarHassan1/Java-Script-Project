const request = require("request");
const constants = require("../config");
const { json } = require("body-parser");

const weatherData = (address, callback) => {
  const url =
    constants.openWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&appid=" +
    constants.openWeatherMap.SECRET_KEY;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Cant Fatch data from open Weather Map Api", undefined);
    } else {
      callback(undefined, {
        temperature: body.main.temp,
        descrption: body.weather[0].description,
        cityName: body.name,
      });
    }
  });
};
module.exports = weatherData;
