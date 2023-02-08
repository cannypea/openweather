const apiKey = 'YOUR_API_KEY';
const city = 'London';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const { main, name } = data;
    const kelvin = main.temp;
    const celsius = kelvin - 273;
    console.log(`The current temperature in ${name} is ${celsius.toFixed(1)}°C.`);
  })
  .catch(error => console.error(error));
