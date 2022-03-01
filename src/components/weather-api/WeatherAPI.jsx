import React, { useEffect, useState } from 'react';
import Show from '../show/Show';
const WeatherAPI = () => {
  const [loading, setLoading] = useState(true);
  const [Weather, setWeather] = useState([]);
  useEffect(() => {
    // `https://api.weatherapi.com/v1/forecast.json?key=${ apiKey }&&q=${ loc }&days=10&aqi=yes&lang=de&alerts=no`
    async function fetchData() {
      let response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=%20de9350cb7c1c46e0a5b214403223101&q=Bremen&aqi=no');
      response = await response.json()
      setWeather(response)
      setLoading(false)
    }
    fetchData()
  }, [])
  console.log(Weather);
  return (
    <>
      {
        loading
          ?
          <h1>Loading..</h1>
          :

          <Show Weather={Weather} />

      }
    </>);
};

export default WeatherAPI;
