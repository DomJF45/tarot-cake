import React, { useState, useEffect } from 'react'
import { Button } from '../../styled-components/styles';
import Cards from './Cards';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getThreeCards, saveHistory } from '../../features/cards/card.slice';
import useDate from '../../hooks/useDate';
import { iHistory } from '../../interfaces/cards/cards.interface';
import Loading from '../util/loaders/Loading';

const Generate = () => {

  const dispatch = useAppDispatch();
  const [generate, setGenerate]: [boolean, (value: boolean) => void] = useState<boolean>(false);
  const { cards, loading } = useAppSelector((state) => state.cardState) 
  

  const handleGenerate = () => {
    setGenerate(true);
    handleSave();
  }



  const handleSave = async () => {

    const { formattedToday, formattedTime } = useDate();
    
    const historyItem = {
      date: formattedToday,
      time: formattedTime,
      cards: cards
    }

    dispatch(saveHistory(historyItem));

  }


  useEffect(() => {

    dispatch(getThreeCards());
    
  }, [])

  return (
    <div
      style={{
        height: 'calc(100vh - 9.5rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}

    >
      <div style={{
          display: generate ? 'none' : 'block'
        }}>
        <p>Get your daily tarot reading now...</p>
        <Button style={{backgroundColor: '#fff', color: '#303030'}} onClick={handleGenerate}>Generate</Button>
      </div>
      <div>
        <Cards generate={generate} cards={cards} />
      </div>
      
    </div>
  )
}

export default Generate