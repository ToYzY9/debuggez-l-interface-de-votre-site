const ACCESS_KEY = "069a0a7fffff5d9f03d7e6e5d7e0e377";

const _retrieveWeatherForecastMockedData = () =>
    fetch("/data/weather-api-mocked-data.json")
        .then((res) => res.json())
        .catch((err) => console.log("Oh no", err));

const _retrieveWeatherForecastApiData = (coordinates) =>
    fetch(
        `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`
    )
        .then((res) => res.json())
        .catch((err) => console.log("Oh no", err));

const retrieveWeatherForecastData = async (coordinates, isMocked) => {
    if (isMocked) {
        return await _retrieveWeatherForecastMockedData();
    }
    return await _retrieveWeatherForecastApiData(coordinates);
};
