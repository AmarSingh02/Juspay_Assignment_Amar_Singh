import axios from "axios";


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
   
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
  
    if (error.response) {
      console.error("API Error:", error.response.data.message || error.message);
      if (error.response.status === 401) {
        
        console.log("Redirect to login");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
