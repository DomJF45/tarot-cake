import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getHistory } from '../features/auth/auth.slice';
import HistoryFeed from '../components/history/HistoryFeed';
import '../styles/History.css';
import Loading from '../components/util/loaders/Loading';

const History = () => {

  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.authState);
  const history = user ? user.history : null;

  const getCardHistory = async () => {
    dispatch(getHistory());
  }

  useEffect(() => {
    getCardHistory();
  }, [])

  
  if (loading === 'pending') {
    return <Loading />
  }
  
  return (
    <div className='history-main-container'>
      <div className='history-title-container'>
        <h1>History</h1>
      </div>
      <div>
       { user ? (
        <>
          { history!.length > 0 ? history!.map((hist, index) => {
            return (
              <HistoryFeed date={hist.date} time={hist.time} cards={hist.cards!} key={index} />
            )
          }):(
            <div>
              <h1>No History Yet!</h1>
            </div>
          )}   
        </>
        ):(
        <> 
          <div>
            <h1>Please log in or sign up to view history!</h1>
          </div>    
        </>
        )}
        
      </div>
    </div>
  )
}

export default History
