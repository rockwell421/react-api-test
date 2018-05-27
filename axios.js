import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API = 'http://myneighby.herokuapp.com/api/v2/';

const instance = axios.create({
  baseURL: `${CORS_PROXY}${API}`
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.common['X-Requested-With'] = 'Origin';

export default instance;
