import axios from "axios";
import { API_baseURL } from "../helpers/utils/constants";

const axiosInstance = axios.create({
  baseURL: API_baseURL,
});

export default axiosInstance;
