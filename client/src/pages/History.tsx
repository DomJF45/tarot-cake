import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getHistory } from '../features/cards/card.slice';
import HistoryFeed from '../components/history/HistoryFeed';
import '../styles/History.css';

const History = () => {

  const dispatch = useAppDispatch();
  const { history, loading } = useAppSelector((state) => state.cardState)

  const getCardHistory = async () => {
    dispatch(getHistory());
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
        { history!.length > 0 ? history!.map((hist, index) => {
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