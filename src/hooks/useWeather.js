import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temprature: "",
    maxTemprature: "",
    minTemprature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data.name,
        climate: data.weather[0].name,
        temprature: data.main.temp,
        maxTemprature: data.main.temp_max,
        minTemprature: data.main.temp_min,
        humidity: data.main.temp,
        cloudPercentage: data.clouds.all,
        wind: data.wind.speed,
        time: data.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      loading: true,
      message: "Finding Location....",
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);
  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
