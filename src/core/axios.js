import axios from "axios";
import process from '../../env';

const axiosInstance = axios.create({ baseURL: process.API_URL });

export default axiosInstance;