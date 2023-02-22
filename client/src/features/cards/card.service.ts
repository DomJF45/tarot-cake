
import { Card, iHistory } from '../../interfaces/cards/cards.interface';
import axios from "axios";
import { RejectedWithValueActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';

const API_URL: string = 'http://localhost:4000/api/tarot';



const getCards = async () => {
  

  const response = await axios.get<Card[]>(`${API_URL}/reading`);

  if (response.data) {
    return response.data
  }

}

const saveToHistory = async (data: iHistory) => {
  
  await axios.post(`${API_URL}/reading/save`, JSON.stringify(data), {withCredentials: true, headers: {
    'Content-Type': 'application/json'
  }});
  
}

const getCardHistory = async () => {
  const response = await axios.get<iHistory[]>(`${API_URL}/reading/history/`, {withCredentials: true});

  console.log(response.data);

  if (response.data) {
    
    return response.data;
  }


}

const cardService = {
  getCards,
  saveToHistory,
  getCardHistory
}

export default cardService;