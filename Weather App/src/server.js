// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

const weatherData = require("../utils/weatherData");

// Port Server
const port = process.env.PORT || 3000;

const hbs = require("hbs");

const path = require("path");
const publicStaticDirPath = path.join(__dirname, "../public");

const viewsPath = path.join(__dirname, "../templates/views");

const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.listen(port, () => {
  console.log(`Server is runing`);
  console.log(`localhostL${port}`);
});

// get req
app.get("", (req, res) => {
  res.send("Hi I Am Omar");
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "You must enter address in search text box",
    });
  }
  weatherData(address, (error, { temperature, descrption, cityName }) => {
    if (error) {
      return res.send({
        error,
      });
    }
    console.log(temperature, descrption, cityName);
    res.send({
      temperature,
      descrption,
      cityName,
    });
  });
});

app.get("*", (req, res) => {
  res.send("Page Not found");
});
