import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Card } from '../interfaces/cards/cards.interface';
import { iHistory } from '../interfaces/cards/cards.interface';
import axios from 'axios';
import HistoryFeed from '../components/history/HistoryFeed';
import '../styles/History.css';
import { DivDivider } from '../styled-components/styles';



const History = () => {

  const [cardHistory, setCardHistory] = useState<iHistory[] | undefined>(undefined);

  const getHistory = async () => {
    try {
      await axios.get<iHistory[]>('http://localhost:4000/api/tarot/reading/history/', {withCredentials: true}).then((res) => setCardHistory(res.data));
      console.log(cardHistory);
    } catch(err: any) {
      console.log(err);
    }
  }


  useEffect(() => {

    getHistory();

  }, [])

  return (
    <div className='history-main-container'>
      <div className='history-title-container'>
        <h1>History</h1>
        
      </div>
      <div>
        {/* index through history array */}
        { cardHistory !== undefined ? cardHistory!.map((hist, index) => {
          return (
            <HistoryFeed date={hist.date} cards={hist.cards} key={index} />
          )
        }):(
          <div>
            <h1>No History Yet!</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default History