import './App.css';
import WeatherAPI from './components/weather-api/WeatherAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <WeatherAPI />
    </div>
  );
}

export default App;

// https://api.weatherapi.com/v1/current.json?key=%20de9350cb7c1c46e0a5b214403223101&q=Bremen&aqi=no
