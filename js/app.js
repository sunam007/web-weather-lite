console.log("js added");

const searchTemp = async () => {
  const searchText = document.getElementById("search-field").value;
  console.log(typeof searchText);
  document.getElementById("search-field").value = "";
  const weatherDetailDiv = document.getElementById("weather-details");
  weatherDetailDiv.textContent = "";
  if (searchText !== "") {
    const apiKey = "eed058d1d2a8daf35c9f863116d7a824";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data.weather[0].icon);
    const { main, weather, name } = data;
    console.log(
      name,
      Math.round(main.temp - 273.15),
      weather[0].icon,
      weather[0].main
    );

    const div = document.createElement("div");
    div.innerHTML = `
          <img src="https://openweathermap.org/img/wn/${
            weather[0].icon
          }@2x.png" alt="" />
          <h1>${name}</h1>
          <h3><span>${Math.round(main.temp - 273.15)}</span>&deg;C</h3>
          <h3>${weather[0].main}</h3>
          <h3 class="lead" >${weather[0].description}</h3>
          <h3 class="lead">Feels Like: ${Math.round(
            main.feels_like - 273.15
          )}&deg;C</h3>
          <h3 class="lead">Humidity: ${main.humidity}%</h3>
          
  `;
    weatherDetailDiv.appendChild(div);
  } else {
    alert("Enter a valid city/town name");
  }
};
