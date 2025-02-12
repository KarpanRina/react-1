import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState({});
  const [titleCity, setTitleCity] = useState("");

  const key = `2333bdbc3598f9975fb3c57df606b866`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${titleCity}&units=metric&appid=${key}`;

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=${key}`)
      .then(res => setCity(res.data))
  }, [])

  const onSearchWeather = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => setCity(res.data));
      setTitleCity("");
    }
  };

  return (
    <>
      <div className="app">
        <div className="inp-field">
          <input
            type="text"
            value={titleCity}
            onChange={(e) => setTitleCity(e.target.value)}
            placeholder="Enter city"
            onKeyDown={onSearchWeather}
          />
        </div>
        {city.main ? (
          <div className="container">
            <div className="header">
              <div className="city">
                <h2>{city.name}</h2>
              </div>
              <div className="temp">
                <h2>{Math.trunc(city.main.temp)} °С</h2>
              </div>
              <div className="desc">
                <h1>{city.weather[0].main}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                ></img>
              </div>
              <div className="footer">
                <div className="feels">
                  <p className="bold">
                    {Math.trunc(city.main.feels_like)}°С
                    <p>feels like</p>
                  </p>
                </div>
                <div className="humidity">
                  <p className="bold">
                    {Math.trunc(city.main.humidity)} g/m3
                    <p>humidity</p>
                  </p>
                </div>
                <div className="wind">
                  <p className="bold">
                    {Math.trunc(city.wind.speed)} m/s
                    <p>wind</p>
                  </p>
                </div>
                <div className="presure">
                <p className="bold">
                    {city.main.pressure}
                    <p>pressure</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
