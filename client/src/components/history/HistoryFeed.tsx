import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../../interfaces/cards/cards.interface';
import CardHistory from './CardHistory'

interface Props {
  date: string;
  time: string,
  cards: Card[];
}

const HistoryFeed = ({date, time, cards}: Props) => {

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          
        }}
      >
        <h3 style={{
          marginLeft: 0,
          paddingLeft: 0
        }}>Date: {date}</h3>
        <h3 style={{
          marginRight: 0,
          paddingRight: 0,
        }}>{time}</h3>
      </div>
      <div className='history-item'>
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