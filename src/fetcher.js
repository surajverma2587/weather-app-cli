const axios = require("axios");

const API_KEY = "393609ac7b2e5f25ccdd00e626ee13dd";

const getCurrentData = async (cityName) => {
  // build url with cityName
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  // use get method from axios and pass URL
  const { data } = await axios.get(url);

  return data;
};

const getForecastData = async (lat, lon) => {
  // build url with cityName
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

  // use get method from axios and pass URL
  const { data } = await axios.get(url);

  return data;
};

// object short-hand
module.exports = {
  getCurrentData,
  getForecastData,
};
