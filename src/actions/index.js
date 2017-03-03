const API_KEY = '4025867e3db4b97f9531183ba02d3213';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
import axios from 'axios';


export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`
  const request = axios.get(url);





  return {
    type: FETCH_WEATHER,
    payload: request
  }
}


//from here goes to reducers
