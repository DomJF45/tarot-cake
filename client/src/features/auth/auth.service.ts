import { iUser } from '../../interfaces/user/user.interface';
import axios from 'axios';
import { iHistory } from '../../interfaces/cards/cards.interface';

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

const saveToHistory = async (data: iHistory) => {
  await axios.post(`${API_URL}/setHistory`, JSON.stringify(data), {withCredentials: true, headers: {'Content-Type': 'application/json'}})
}

const getHistory = async () => {


  const response = await axios.get(`${API_URL}/history`, { withCredentials: true});

  if (response.data) {
    return response.data;
  }

}

// handle log out

const authService = {
  login,
  register,
  saveToHistory,
  getHistory
}

export default authService;
