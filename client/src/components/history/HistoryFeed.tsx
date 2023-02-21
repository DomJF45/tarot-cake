import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../cards/card.interface'
import CardHistory from './CardHistory'

interface Props {
  date: string;
  cards: Card[];
}

const HistoryFeed = ({date, cards}: Props) => {

  return (
    <>
      <div className='history-item'>
        <h3>Date: {date}</h3>
        <div className='history-card-container'>
          {cards.map((card, index) => {
            return (
              <CardHistory card={card} key={index} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HistoryFeed