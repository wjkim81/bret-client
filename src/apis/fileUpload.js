import axios from 'axios';
import baseURL from '../shared/baseURL';

export default axios.create({
  baseURL: baseURL,
});
