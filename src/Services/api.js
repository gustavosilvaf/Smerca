import axios from 'axios';

const api = axios.create({
  baseURL: "https://smerca-api-staging.herokuapp.com/api/v1/"
});

export default api;