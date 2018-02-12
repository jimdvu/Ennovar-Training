import axios from 'axios';

const API_KEY = 'f34954f0ce0843b672de447ec3e60552';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//to keep our action types consistent between
//reducers and actions creators
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city)  {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
