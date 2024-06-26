import { useState } from "react";
import axios from "axios";
import Day from "./components/Day";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const key = "553a7b4089a1ea802f48510994124848";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  const searchWeather = (e) => {
    city.trim();
    if (e.key === "Enter" && e.target.value !== "") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setCity("");
    }
  };
  const searchWeatherClick = (e) => {
    city.trim();
    if (e.target.value !== "") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setCity("");
    }
  };
  const searchCity = (e) => {
    const city = e.target.value;
    setCity(city);
  };
  return (
    <div className="app">
      <Day />
      <header>
        <h1 className="header">weather forecast</h1>
      </header>
      <div className="input">
        <input
          name="city"
          type="text"
          autoFocus
          placeholder="Location"
          value={city}
          onChange={searchCity}
          onKeyDown={searchWeather}
          onClick={searchWeatherClick}
        />
        <span className="search"></span>
      </div>
      <div className="container">
        <div className="container-header">
          <h2>{data.name}</h2>
          <div>
            {data.main ? <div>{data.main.temp.toFixed()}°C</div> : null}
          </div>
        </div>
        <div className="main">
          <div>
            {data.weather ? <div>{data.weather[0].description}</div> : null}
          </div>
          <div className="image">
            {data.weather ? (
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather"
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="footer">
        {data.main !== undefined && (
          <div className="footer-elements">
            <div>
              {data.main ? (
                <span>Feels like {data.main.feels_like.toFixed()}°C</span>
              ) : null}
            </div>
            <div>
              {data.main ? <span>Humidity {data.main.humidity} %</span> : null}
            </div>
            <div>
              {data.wind ? <span>Wind {data.wind.speed} м/с</span> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
