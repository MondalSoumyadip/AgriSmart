export const fetchWeatherData = async (city) => {
 try {
   const apiKey = "84e6cb33416ca0e2ee6806f78d5fb842";
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);
   const data = await response.json();
   return data;
 } catch (error) {
   throw error;
 }
};