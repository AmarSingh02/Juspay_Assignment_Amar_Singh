
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Define endpoints
const apiEndpoint = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  GET_USERS: `${BASE_URL}/users`,
  GET_PROJECTS: `${BASE_URL}/projects`,
  GET_ORDERS: `${BASE_URL}/orders`,
  
};

export default apiUrl;
