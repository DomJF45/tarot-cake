import React, { useState } from 'react'
import { Card } from '../../interfaces/cards/cards.interface';
import { AnimatePresence, motion } from 'framer-motion';
import useModal from '../../hooks/useModal';
import CardModal from './CardModal';
import { DivDivider } from '../../styled-components/styles';

type Props = {
  card: Card,
  index: number,
}

const CardComponent = (props: Props) => {

  const [flipped, setFlipped]: [boolean, (prev: boolean) => void] = useState<boolean>(false);
  
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
    <AnimatePresence mode="wait" initial={true}>
      <motion.img 
        className='card-img'
        key={`${props.card.id}-${flipped}`}
        src={ flipped ? props.card.image : 'https://ik.imagekit.io/wvlrlc0tr/tarot/back.png'} 
        onTap={():void => handleFlip()}
        //whileTap={ !flipped ? {rotateY: [0, 90], scale: .9}: {}}
        initial={{
          rotateY: 90,
        }}
        animate={{
          rotateY: 0,
        }}
        exit={{
          rotateY: 90,
        }}
        transition={{duration: .3}}
        whileHover={{
          scale: 1.05,
          cursor: 'pointer',
          transition: { type: "spring", stiffness: 550, damping: 10 }
        }}
      />
      <h3
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
    </AnimatePresence>
  )
}

export default CardComponent
