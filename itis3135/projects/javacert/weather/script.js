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
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
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
  weatherMain.textContent = safe(data.weather?.[0]?.main);

  mainTemp.textContent = `Temp: ${safe(data.main?.temp)} °C`;
  feelsLike.textContent = `Feels like: ${safe(data.main?.feels_like)} °C`;

  humidity.textContent = `Humidity: ${safe(data.main?.humidity)}%`;

  wind.textContent = `Wind: ${safe(data.wind?.speed)} m/s`;
  windGust.textContent = `Wind Gust: ${safe(data.wind?.gust)} m/s`;
}

btn.addEventListener("click", () => {
  const city = select.value;

  if (!city) return;

  showWeather(city);
});