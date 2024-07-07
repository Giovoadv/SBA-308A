import axios from "axios";

const inputWeather = document.querySelector("#myInput");
const container = document.querySelector(".container");
const searchButton = document.getElementById("searchButton");

const apiKey = "d5e41fa96f9d475ab1f01013240307";

const weatherCity = async (e) => {
  e.preventDefault();
  const city = document.querySelector("#myInput").value;

  if (city === "") {
    window.alert("Please enter a City Name");
  } else {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      if (res.status === 200) {
        const cityData = res.data;
        weatherInfo(cityData);
      } else {
        window.alert("City not found. Enter a valid City");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      window.alert("City not found. Enter a valid City");
    }
  }

  inputWeather.value = "";
};
searchButton.addEventListener("click", weatherCity);

const weatherInfo = (data) => {
  const temperature = data.current.temp_f;
  const weatherCondition = data.current.condition.text;
  const feelsLike = data.current.feelslike_f;
  const humidity = data.current.humidity;
  const wind = data.current.wind_mph;
  const location = data.location.name;
  const region = data.location.region;
  const weatherIcon = data.current.condition.icon;

  const weatherData = document.createElement("div");
  weatherData.classList.add("card");
  weatherData.innerHTML = `
     <h1>${location}, ${region}</h1>
          <h1>${temperature}°F</h1>
          <img src="${weatherIcon}"></img>
         <p><strong>${weatherCondition}</strong></p>
          <p><strong> Humidity: ${humidity}% <img width="20" height="18" src="https://img.icons8.com/color/48/dew-point.png" alt="dew-point"/></strong></p>     
          <p><strong>Wind speed: ${wind}mph <img width="20" height="15" src="https://img.icons8.com/ios/50/wind--v1.png" alt="wind--v1"/></strong></p>
         <p> <strong>Feels Like: ${feelsLike}</strong></p>
          
          
  `;
  container.textContent = "";
  container.appendChild(weatherData);
};
