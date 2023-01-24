const setData = async (city) => {
  const response = await getData(city);
  cityname.innerHTML = city;
  cloud_pct.innerHTML = response.cloud_pct;
  feels_like.innerHTML = response.feels_like;
  humidity.innerHTML = response.humidity;
  humidity0.innerHTML = response.humidity;
  min_temp.innerHTML = response.min_temp;
  max_temp.innerHTML = response.max_temp;
  sunrise.innerHTML = response.sunrise;
  sunset.innerHTML = response.sunset;
  temp.innerHTML = response.temp;
  wind_degrees.innerHTML = response.wind_degrees;
  wind_speed.innerHTML = response.wind_speed;
  wind_speed0.innerHTML = response.wind_speed;
};

const appendData = async (index, data) => {
  document.getElementsByClassName("cloud_pct")[index].innerHTML =
    data.cloud_pct;
  document.getElementsByClassName("feels_like")[index].innerHTML =
    data.feels_like;
  document.getElementsByClassName("humidity")[index].innerHTML = data.humidity;
  document.getElementsByClassName("min_temp")[index].innerHTML = data.min_temp;
  document.getElementsByClassName("max_temp")[index].innerHTML = data.max_temp;
  document.getElementsByClassName("sunrise")[index].innerHTML = data.sunrise;
  document.getElementsByClassName("sunset")[index].innerHTML = data.sunset;
  document.getElementsByClassName("temp")[index].innerHTML = data.temp;
  document.getElementsByClassName("wind_degrees")[index].innerHTML =
    data.wind_degrees;
  document.getElementsByClassName("wind_speed")[index].innerHTML =
    data.wind_speed;
};

const getData = async (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6fa00fe221msha9d1ef9958c7eb2p109bb0jsn26e171667af0",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const api = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
  const response = await (await fetch(api + city, options)).json();
  return response;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  setData(city.value);
});

const setDefaultData = async (cities) => {
  for (let city of cities) {
    let response = await getData(city);
    appendData(cities.indexOf(city), response);
  }
};

setData("Mumbai");
setDefaultData([
  "HYDERABAD",
  "GUWAHATI",
  "RAIPUR",
  "THIRUVANANTHAPURAM",
  "INDORE",
  "RANCHI",
]);
