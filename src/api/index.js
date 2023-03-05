export const fetchWeather = async location => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
