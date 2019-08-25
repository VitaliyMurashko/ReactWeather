import React from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather/currentWeather'

function App() {
  return (
    <div className="App">
      <h1>Погода Сейчас</h1>
      <CurrentWeather />
    </div>
  );
}

export default App;
