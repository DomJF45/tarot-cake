import React, { Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from 'react'
import { Card } from '../../interfaces/cards/cards.interface';
import { animate, motion } from 'framer-motion';
import useModal from '../../hooks/useModal';
import CardModal from './CardModal';
import { DivDivider } from '../../styled-components/styles';

type Props = {
  card: Card,
  index: number,
}

const CardComponent = (props: Props) => {

  const [flipped, setFlipped]: [boolean, (prev: boolean) => void] = useState<boolean>(false);
  const [showBio, setShowBio]: [boolean, (prev: boolean) => void] = useState<boolean>(false);
  const { isOpen, toggle } = useModal();

  const handleFlip = ():void => {
    if (!flipped) {
      setFlipped(true)
    }
    if (flipped) {
      toggle();
    }
  }

  return (
    <div
    >
      <motion.img 
        className='card-img' 
        src={ flipped ? props.card.image : 'https://ik.imagekit.io/wvlrlc0tr/tarot/back.png'} 
        onClick={():void => handleFlip()}
        whileTap={ !flipped ? {rotateY: [0, 90], scale: .9}: {}}
        transition={{ type: "spring", stiffness: 480, damping: 20, duration: .8}}
        whileHover={{
          scale: 1.05,
          cursor: 'pointer',
          transition: { type: "spring", stiffness: 550, damping: 10, duration: .5}
        }}
      />
      <h3
        // style={ flipped ? {display: "block"} : {display: "none"}}
      >{flipped ? props.card.name : "???"}</h3>
      <CardModal isOpen={isOpen} toggle={toggle} card={props.card}>
        <div id='inner-card'>
          <h2>{props.card.name}</h2>
          <div>
            <img src={props.card.image} />
          </div>
          <DivDivider />
          <p id='card-bio'>{props.card.bio}</p>
        </div>
      </CardModal>
    </div>
  )
}

export default CardComponent