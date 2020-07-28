window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/b8081c9a61f3196a6816a2e00eac593a/${lat},${long}`;

      fetch(api)
        .then((req) => {
          return req.json();
        })
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;
          // set DOM element From the Api
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          setIcons(icon, document.querySelector(".icon"));
        });
    });
  } else {
    document.getElementsByClassName("location-timezone").textContent =
      "There is Some error";
  }
  // Icon functions
  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
