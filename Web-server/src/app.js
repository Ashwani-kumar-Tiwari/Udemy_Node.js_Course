const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// console.log(__dirname);
// console.log(__filename);

// Home page
// app.get("", (req, res) => {
//   //   res.send("Hello Express!");
//   res.send("<h1>Hello Express!</h1>");
// });

// Help Page
// app.get("/help", (req, res) => {
//   //   res.send("Help page");
//   res.send({
//     name: "Ashwani",
//     age: 24,
//   });
// });

// About page
// app.get("/about", (req, res) => {
//   //   res.send("About page");
//   res.send([
//     {
//       name: "Ashwani",
//     },
//     {
//       name: "Kuldeep",
//     },
//   ]);
// });

// Dedine paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handelbar engine and views location
app.set("view engine", "hbs"); //handlebar template setup
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Home page
app.get("", (req, res) => {
  res.render("index", {
    title: "Wooah! it's working",
    name: "Ashwani",
  });
});

// About page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Kuldeep",
  });
});

// Help Page
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    helpText: "This is some helpful text.",
    name: "Btixboj",
  });
});

// Weather Page
app.get("/weather", (req, res) => {
  //   res.send("Weather page");
  res.send([
    {
      forecast: "It is raining",
      location: "Greater Noida",
    },
    {
      temperature: 64,
    },
  ]);
});

// Help 404 page
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Kuldeep Kumar Tiwari",
    errorMessgae: "This help article does not exixt",
  });
});

// 404 page
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ashwani Kumar Tiwari",
    errorMessgae: "This page does not exist",
  });
});

app.listen(3000, () => {
  console.log("Server is up on post 3000.");
});
