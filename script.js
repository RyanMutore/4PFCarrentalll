const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'da9b05ee0159cdcf2f9ad4fc69eb3f81'; // Replace with your actual API key

document.getElementById('get-weather-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    fetchWeather(cityName);
});

async function fetchWeather(cityName) {
    const response = await fetch(`${url}?q=${cityName}&appid=${apiKey}&units=metric`);
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        alert('City not found. Please try again.');
    }
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('weather-info').style.display = 'block';
}