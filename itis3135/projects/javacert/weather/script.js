const btn = document.getElementById("get-weather-btn");
const select = document.getElementById("city-select");
const icon = document.getElementById("weather-icon");
const locationEl = document.getElementById("location");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    if (!res.ok) throw new Error("Network error");
    return await res.json();
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    if (city === "paris") {
      alert("Something went wrong, please try again later.");
    }
    return;
  }

  const safe = (value) => (value !== undefined ? value : "N/A");

  let iconUrl = "";
  if (data.weather && data.weather[0] && data.weather[0].icon) {
    iconUrl = data.weather[0].icon;
  }
  icon.src = safe(iconUrl);

  locationEl.textContent = safe(data.name);

  let weatherMainValue = "";
  if (data.weather && data.weather[0] && data.weather[0].main) {
    weatherMainValue = data.weather[0].main;
  }
  weatherMain.textContent = safe(weatherMainValue);

  let tempValue = "";
  if (data.main && data.main.temp !== undefined) {
    tempValue = data.main.temp;
  }
  mainTemp.textContent = `Temp: ${safe(tempValue)} °C`;

  let feelsValue = "";
  if (data.main && data.main.feels_like !== undefined) {
    feelsValue = data.main.feels_like;
  }
  feelsLike.textContent = `Feels like: ${safe(feelsValue)} °C`;

  let humidityValue = "";
  if (data.main && data.main.humidity !== undefined) {
    humidityValue = data.main.humidity;
  }
  humidity.textContent = `Humidity: ${safe(humidityValue)}%`;

  let windValue = "";
  if (data.wind && data.wind.speed !== undefined) {
    windValue = data.wind.speed;
  }
  wind.textContent = `Wind: ${safe(windValue)} m/s`;

  let gustValue = "";
  if (data.wind && data.wind.gust !== undefined) {
    gustValue = data.wind.gust;
  }
  windGust.textContent = `Wind Gust: ${safe(gustValue)} m/s`;
}

btn.addEventListener("click", () => {
  const city = select.value;
  if (!city) return;
  showWeather(city);
});