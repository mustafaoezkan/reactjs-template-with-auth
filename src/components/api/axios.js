import axios from "axios";

const BASE_URL = "http://localhost";

export default axios.create({
  baseURL: BASE_URL
});
