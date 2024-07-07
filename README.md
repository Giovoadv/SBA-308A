                                     *Weather App*


This is a simple web application that allows users to retrieve current weather information for a specific city using the WeatherAPI service. It displays temperature, weather conditions, humidity, wind speed, and "feels like" temperature for the entered city.

Features:

    -Input: Users can enter the name of a city in the input field.
    -Search: Clicking the search button fetches weather data from WeatherAPI.
    -Display: The weather data is displayed dynamically on the page, including city name, region, temperature in Fahrenheit, weather condition icon, humidity, wind speed, and feels like temperature.

How to Use:

    1. Enter the name of a city in the input field.
    2. Click on the search button or press enter.
    3. If the city is found, weather information is displayed.
    4. If the city is not found or there is an error fetching data, an alert is shown.


APIs Used:

WeatherAPI: 

Used to fetch current weather data for the entered city.

    -Endpoint: http://api.weatherapi.com/v1/current.json
    -Parameters: key (API key), q (city name)

Technologies Used:
    -Frontend: HTML, CSS, JavaScript
    -Library: Axios for making HTTP requests


Setup:
To run the application locally:

    1. Clone this repository.
    2. Open the terminal in VSCODE.
    3. Run npm install
    4. Enter "npm start"
    5. Ensure a stable internet connection to fetch weather data.
