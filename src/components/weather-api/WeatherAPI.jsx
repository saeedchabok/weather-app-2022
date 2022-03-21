import { useEffect, useState } from 'react';
import Show from '../show/Show';
const WeatherAPI = () => {
  const [ location, setLocation ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Weather, setWeather] = useState([]);
  const success = (pos) =>
  {
      let crd = pos.coords;
      setLocation(`${crd.latitude},${crd.longitude}`);
  }
  useEffect(() =>
  {
      navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result)
      {
          if (result.state === "granted")
          {
              navigator.geolocation.getCurrentPosition(success);
          }
          else if (result.state === "prompt") 
          {
              navigator.geolocation.getCurrentPosition(success, err => console.log(err), {
                  enableHighAccuracy: true,
                  timeout: 5000,
                  maximumAge: 0,
              });
          }
          result.onchange = function ()
          {
              console.log(result.state);
          };
              fetch(`https://api.weatherapi.com/v1/forecast.json?key=de9350cb7c1c46e0a5b214403223101&&q=${ location }&days=10&aqi=yes&lang=de&alerts=no`).then(data => data.json()).then(json => 
              {
                if(location !== null)
                {
                  setWeather(json)
                  setLoading(false)
                }
              })
      }); 
  }, [ location ]);

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
