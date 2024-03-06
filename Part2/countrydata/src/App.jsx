import { useState, useEffect } from "react";
import axios from "axios";
import getWeatherKey from "./ApiKey"; //file in .gitignore, better than using an env variable

const api_key = getWeatherKey();

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setAllCountries(response.data);
        console.log("got initial country data");
      });
  }, []);

  const handleCountryChange = (event) => {
    setSearchCountry(event.target.value);
    console.log("change country");
  };

  const countryToPrint = () => {
    const specific = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
    console.log(`Seearch has ${specific.length} matches`);
    return specific;
  };

  const contries = countryToPrint();

  const handleShowButton = (country) => {
    setSearchCountry(country.name.common);
  };

  const showWeather = (country) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital},${country.name.code}&appid=${api_key}`
      )
      .then((response) => {
        var coords = { lat: response.data[0].lat, lon: response.data[0].lon };
        console.log(coords);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api_key}`
          )
          .then((response) => {
            console.log(response.data);
            setWeather(response.data);
          });
      });
  };

  return (
    <div>
      <p>{api_key}</p>
      <p>Find counries </p>
      <input value={searchCountry} onChange={handleCountryChange} />
      <div>
        {contries.length > 10
          ? "Too many matches, specify another filter"
          : contries.map((country) => (
              <div key={country.name.common}>
                {country.name.common}{" "}
                <button onClick={() => handleShowButton(country)}>show</button>
              </div>
            ))}
        <br />
      </div>

      {contries.length === 1 ? (
        <>
          <p>Capital: {contries.map((country) => country.capital)}</p>
          <p>Population: {contries.map((country) => country.population)}</p>
          <p>Area: {contries.map((country) => country.area)}</p>
          <p>Languages:</p>
          <ul>
            {contries.map((country) =>
              Object.entries(country.languages).map(([code, language]) => (
                <li key={code}>{language}</li>
              ))
            )}
          </ul>
          <img src={contries.map((country) => country.flags.png)}></img>
          <div>
            {weather === null ? (
              showWeather(contries[0])
            ) : (
              <div>
                <h2>Weather</h2>
                {`Tempurature: ${weather.main.temp - 272.15} degrees C`} <br />
                {`Weather: ${weather.weather[0].description}`} <br />
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
                <br />
                {`Wind: ${weather.wind.speed} m/s`}
              </div>
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
