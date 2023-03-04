import { iUser } from '../../interfaces/user/user.interface';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/user';

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

const login = async (data: iUser) => {

  const response = await axios.post(`${API_URL}/login`, JSON.stringify(data), config);
  
  if (response.data) {
    return response.data;
  }

}

const register = async (data: iUser) => {
  const response = await axios.post(`${API_URL}/`, JSON.stringify(data), config);

  if (response.data) {
    return response.data;
  }
}

// handle log out

const authService = {
  login,
  register,
}

export default authService;
