import React from 'react'
import classes from './CurrentPositionWeather.module.css'

 const CurrentPositionWeaher = props => {
    return(
        <div className={classes.Wrapper}>
        <h2>{props.CurrentPositionWeatherData.name}</h2>
        <div>
            <h3>{props.CurrentPositionWeatherData.weather[0].description}</h3> 
        </div>
        <div >
            <strong>Температура: {props.CurrentPositionWeatherData.main.temp}&#8451;</strong>
        </div>
        <div>
            <strong>Скорость ветра: {props.CurrentPositionWeatherData.wind.speed} м/c</strong>
        </div>
        <div>
            <strong>Давление: {props.CurrentPositionWeatherData.main.pressure} р/c</strong>
        </div>
        </div>
    )
}
export default CurrentPositionWeaher