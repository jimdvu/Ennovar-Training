import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const conversion = 9/5;
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp)=> temp * conversion - 459);
    const pres = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="black" units="F" /></td>
        <td><Chart data={pres} color="green" units="hPa" /></td>
        <td><Chart data={humid} color="blue" units="%" /></td>
        <td>
          <span className="delete-group-btn">
            <button type="reset" className= "btn btn-reset">X</button>
          </span>
        </td>
      </tr>
    )
  }


  render (){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }){
  return { weather };
  //{ state } ( return {weather : weather})
}

export default connect (mapStateToProps)(WeatherList);
