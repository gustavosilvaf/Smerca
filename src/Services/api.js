import axios from 'axios';

const api = axios.create({
  baseURL: "https://smerca-api-staging.herokuapp.com/api/v1/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST'
  }
});

export default api;