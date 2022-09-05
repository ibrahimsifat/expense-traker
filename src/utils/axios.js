import axios from "axios";

const axiosInstant = axios.create({
  baseURL: "https://json-web-server12.herokuapp.com/",
});
export default axiosInstant;
