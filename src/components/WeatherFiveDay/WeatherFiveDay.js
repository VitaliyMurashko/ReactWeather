import React from 'react'
import classes from './WeatherFiveDay.module.css'

const WeatherFiveDay = props => {
    return (
        <>
        <h2>Прогноз на 5 дней</h2>
        <div className={classes.wrapper}>
            {props.FiveDayData ? props.FiveDayData.list.map((data) =>{
              return(<div className={classes.itemWrapper} key={data.dt}>
                  <div><h3>{data.dt_txt}</h3></div>
                  <div><p>Температура: {data.main.temp}&#8451;</p></div>
                  <div><p>Влажность: {data.main.humidity}%</p></div>
                <div><p>Давление: {data.main.pressure}р/с</p></div>
                <div><p>Скорость ветра: {data.wind.speed}м/c</p></div>
                </div>)
            }):
            <div>Данные загружаются</div>}
            
        </div>
        </>

    )
}

export default WeatherFiveDay