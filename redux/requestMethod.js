import axios from 'axios';
import {BASE_URL} from '../env.config';

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
