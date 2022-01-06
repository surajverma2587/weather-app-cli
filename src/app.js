// import inquirer
const inquirer = require("inquirer");
const { getCurrentData, getForecastData } = require("./fetcher");
const Weather = require("./lib/Weather");

// declare city name question
const cityNameQuestion = {
  type: "input",
  message: "Enter city name:",
  name: "cityName",
};

// declare forecast question
const forecastQuestion = {
  type: "confirm",
  message: "Would you like to view the forecast data?",
  name: "isForecast",
};

const start = async () => {
  // prompt cityNameQuestion and get cityName
  const { cityName } = await inquirer.prompt(cityNameQuestion);

  // from answers get current weather data
  const currentData = await getCurrentData(cityName);

  const currentWeather = new Weather(currentData);

  // print current weather info
  currentWeather.displayCurrentInfo();

  // prompt forecastQuestion and get value
  const { isForecast } = await inquirer.prompt(forecastQuestion);

  if (isForecast) {
    // if yes then get forecast data
    // get lat and lon for city
    const {
      coord: { lat, lon },
    } = currentData;

    const forecastData = await getForecastData(lat, lon);

    const { daily } = forecastData;

    daily.forEach((dailyForecast) => {
      const forecastWeather = new Weather(dailyForecast);
      forecastWeather.displayForecastInfo();
    });
  } else {
    // else if no then end application
    console.log("Thank you for using the weather app CLI!!");
    process.exit(0);
  }
};

start();
