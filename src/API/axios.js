import axios from "axios";

const axiosInstance = axios.create({
  // local instance of fire base function
  // baseURL: "http://127.0.0.1:5001/clone-61236/us-central1/api",
  // deployed version of fire base function

  // *deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-glq0.onrender.com",
});

export {axiosInstance}