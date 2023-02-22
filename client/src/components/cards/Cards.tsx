import React, { Dispatch, useEffect, useState, SetStateAction } from 'react';
import axios from 'axios';
import { Card } from '../../interfaces/cards/cards.interface';
import { 
  motion,
  AnimateSharedLayout,
  AnimatePresence
} from 'framer-motion';
import { Button } from '../../styled-components/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCards } from '../../features/cards/card.service';
import useModal from '../../hooks/useModal';
import useDate from '../../hooks/useDate';
import CardComponent from './CardComponent';
import '../../styles/Cards.css';

interface CardResponse {
  data?: Card[];
}

type Props = {
  generate: boolean;
  setGenerate?: Dispatch<SetStateAction<boolean>>;
}

const Cards = (props: Props) => {

  const { isOpen, toggle } = useModal();
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardState) 
  const defaultCards: Card[] = [];
  const defaultCard: Card = {
    id: -1,
    name: '',
    bio: '',
    image: ''
  }
  // const [threeCards, setCards]: [Card[], (cards: Card[]) => void] = useState(defaultCards);
  const [modalCard, setModalCard]: [Card, (card: Card) => void] = useState(defaultCard);
  

  const handleSave = async () => {

    const newDate = useDate();

    const historyItem = {
      date: newDate,
      cards: cards
    }

    try {
      await axios.post('http://localhost:4000/api/tarot/reading/save', JSON.stringify(historyItem), {withCredentials: true, headers: {
        'Content-Type': 'application/json'
      }});
    } catch(err: any) {
      console.log(err)
    }

    console.log(historyItem);
  }

  useEffect(() => {

    // axios.get<Card[]>('http://localhost:4000/api/tarot/reading')
    //   .then((res) => {setCards(res.data)});
    dispatch(getCards());
    

  }, [])

  return (
    <div style={{position: 'relative', marginTop: '10%', marginBottom: 'calc(30% - 200px)'}}>
      <div 
        className={props.generate ? 'cards-container' : 'cards-container-hidden'}
      >
        {cards!.map((card: Card, index: number) => {
          return (<div>
            <AnimateSharedLayout>
              <AnimatePresence>
                <motion.div
                  animate={ props.generate ? {scale: [.5, 1.0], rotateY: [180, 0]} : {x: 0}}
                  transition={props.generate && index === 0 ? {duration: .5} : {duration: index / 2}}
                  
                >
                  <CardComponent card={card} index={index} setCard={setModalCard} />
                </motion.div>
              </AnimatePresence>
            </AnimateSharedLayout>
          </div>
          )
        })}
      </div>
      <div
        style={{
          display: props.generate ? "flex" : "none",
          justifyContent: 'center',
          alignItems: "center",
          backgroundColor: "transparent",
          height: '200px'
        }}
      >

      <Button onClick={handleSave}>Save</Button>
    </div>
    </div>
  )
}

export default Cards