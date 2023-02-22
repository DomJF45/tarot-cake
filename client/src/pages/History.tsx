import { useState, useEffect } from 'react';
import { iHistory } from '../interfaces/cards/cards.interface';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getHistory } from '../features/cards/card.slice';
import HistoryFeed from '../components/history/HistoryFeed';
import '../styles/History.css';

const History = () => {

  const [cardHistory, setCardHistory] = useState<iHistory[] | undefined>([]);
  const dispatch = useAppDispatch();
  const { history } = useAppSelector((state) => state.cardState)

  const getCardHistory = async () => {
    
    dispatch(getHistory());

    setCardHistory(history);
    
  }


  useEffect(() => {

    getCardHistory();

  }, [])

  console.log(history);

  return (
    <div className='history-main-container'>
      <div className='history-title-container'>
        <h1>History</h1>
      </div>
      <div>
        { cardHistory!.length > 0 ? history!.map((hist, index) => {
          return (
            <HistoryFeed date={hist.date} time={hist.time} cards={hist.cards!} key={index} />
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