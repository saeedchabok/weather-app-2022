import React, { useEffect, useState } from 'react';

const WeatherAPI = () => {
  const [loading, setLoading] = useState(true);
  const [Weather, setWeather] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://api.weatherapi.com/v1/current.json?key=%20de9350cb7c1c46e0a5b214403223101&q=Bremen&aqi=no');
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

          <h2>Loading ok</h2>

      }
    </>);
};

export default WeatherAPI;
