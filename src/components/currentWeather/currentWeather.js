import React, { Component } from 'react';
import './currentWeather.module.css'
import CurrentPositionWeather from '../CurrentPositionWeaher/CurrentPositionWeather'
import WeatherFiveDay from '../WeatherFiveDay/WeatherFiveDay'


export default class CurrentWeather extends Component {

    state = {
        CurrentPositionWeatherData: null,
        CurrentPosition: null,
        WeatherDataFiveDay: null,
        ButtonClicked: false,
    }

    getCurrentPositionWeatherData() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                CurrentPosition:
                {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
            })
            const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.CurrentPosition.lat}&lon=${this.state.CurrentPosition.lon}&lang=ru&units=metric&appid=d55b13637c4b1d152458a3866762ed54`;
            fetch(URL).then(res => res.json()).then(json => {
                this.setState({ CurrentPositionWeatherData: json });
            }).then(()=>this.getWeatherDataFiveDay()).catch(error => alert(error));
        });

    }

    getWeatherDataFiveDay() {
        const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.CurrentPosition.lat}&lon=${this.state.CurrentPosition.lon}&lang=ru&units=metric&appid=d55b13637c4b1d152458a3866762ed54`;
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ WeatherDataFiveDay: json });
        });
    }

    componentDidMount() {
        this.getCurrentPositionWeatherData();
    }


    render() {
        const weatherData = this.state.CurrentPositionWeatherData;
        if (!weatherData) return <div>Loading</div>

       return (
            <>
                <CurrentPositionWeather CurrentPositionWeatherData={weatherData} />
                <button disabled={this.state.ButtonClicked} onClick={() =>this.setState({ButtonClicked:true})}>Узнать погоду на 5 дней</button>
                {this.state.ButtonClicked ? <WeatherFiveDay FiveDayData={this.state.WeatherDataFiveDay}/> : null }
            </>
        )
    }
}



