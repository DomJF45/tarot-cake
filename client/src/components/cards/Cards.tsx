import React, { Dispatch, useEffect, useState, SetStateAction } from 'react';
import { Card, iHistory } from '../../interfaces/cards/cards.interface';
import { 
  motion,
  AnimateSharedLayout,
  AnimatePresence
} from 'framer-motion';
import { Button } from '../../styled-components/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { } from '../../features/cards/card.slice';
import useDate from '../../hooks/useDate';
import CardComponent from './CardComponent';
import '../../styles/Cards.css';
import Loading from '../util/loaders/Loading';

interface CardResponse {
  data?: Card[];
}

type Props = {
  generate: boolean;
  cards: Card[] | undefined
}

const Cards = (props: Props) => {

  const { loading } = useAppSelector((state) => state.cardState)

  if (loading === 'pending') return <Loading />

  return (
    <div style={{position: 'relative', marginTop: '10%', marginBottom: 'calc(30% - 200px)'}}>
      <div 
        className={props.generate ? 'cards-container' : 'cards-container-hidden'}
      >
        {props.cards!.map((card: Card, index: number) => {
          return (<div>
            <AnimateSharedLayout>
              <AnimatePresence mode="wait" initial={true}>
                <motion.div
                  animate={ props.generate ? {scale: [.5, 1.0], rotateY: [180, 0]} : {x: 0}}
                  transition={props.generate && index === 0 ? {duration: .5} : {duration: index / 2}}
                >
                  <AnimatePresence mode="wait" initial={true}>
                    <CardComponent card={card} index={index} />
                  </AnimatePresence>
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
      </div>
    </div>
  )
}

export default Cards
