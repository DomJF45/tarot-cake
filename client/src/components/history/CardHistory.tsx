import React from 'react'
import { Card } from '../../interfaces/cards/cards.interface';
import CardModal from '../cards/CardModal';
import useModal from '../../hooks/useModal';
import { DivDivider } from '../../styled-components/styles';

interface Props {
  card: Card
}

const CardHistory = ({ card }: Props) => {

  const { isOpen, toggle } = useModal();

  return (
    <>
      <div className='history-card'>
        <img 
          src={card.image} 
          onClick={() => toggle()}
        />
        <h2>{card.name}</h2>
      </div>
      <CardModal isOpen={isOpen} toggle={toggle} card={card}>
        <div id='inner-card'>
          <h2>{card.name}</h2>
          <div>
            <img src={card.image} />
          </div>
          <DivDivider />
          <p id='card-bio'>{card.bio}</p>
        </div>
      </CardModal>
    </>
  )
}

export default CardHistory