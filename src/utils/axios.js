import axios from "axios";

const axiosInstant = axios.create({
  baseURL: "http://localhost:9000/",
});
export default axiosInstant;
