// console.log("starting");

// setTimeout(() => {
//   console.log("2 sec timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 sec timer");
// }, 0);

// console.log("stoping");

///////////////////////////////////////////////////

const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

/////////////////////////----forecast----////////////////////////////////////
// const url =
//   "http://api.weatherstack.com/current?access_key=3228032132dd4afca8ba367e5111bc7b&query=28.477035,77.520176&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response);
//   // const data = JSON.parse(response.body);
//   // console.log(data);
//   // console.log(data.current);

//   // console.log(response.body.current);

//   if (error) {
//     // console.log(error);
//     console.log("Unable to connect weather services");
//   } else if (response.body.error) {
//     console.log("Location is not found");
//   } else {
//     console.log(
//       chalk.green(response.body.current.weather_descriptions[0]) +
//         ". It is currently " +
//         chalk.blue(response.body.current.temperature) +
//         " degrees out. It feels like " +
//         chalk.red(response.body.current.feelslike) +
//         " degrees out."
//     );
//   }
// });

/////////////////////////----geocode----////////////////////////////////////

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnRpeGJvaiIsImEiOiJja3VobTBnNWoyZmRmMm5tb2lvMXprcW8zIn0.tixOZVOg5pKijxq-4EVAAg&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect location services");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find the location. Try another search");
//   } else {
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(longitude, latitude);
//   }
// });

// geocode("Noida", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

// forecast(28.477035, 77.520176, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

/////////////////////////----callback chaining----////////////////////////////////////

//console.log(process.argv);

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  // geocode(address, (error, data) => {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastdata);
    });
  });
}
