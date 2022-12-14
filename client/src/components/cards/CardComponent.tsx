import React, { Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from 'react'
import { Card } from './card.interface'
import { animate, motion } from 'framer-motion'
import useModal from '../../hooks/useModal'
import CardModal from './CardModal'
import { DivDivider } from '../../styled-components/styles'

type Props = {
  card: Card,
  index: number,
  setCard: (card: Card) => void
}

const CardComponent = (props: Props) => {

  const [flipped, setFlipped]: [boolean, (prev: boolean) => void] = useState<boolean>(false);
  const [showBio, setShowBio]: [boolean, (prev: boolean) => void] = useState<boolean>(false);
  const { isOpen, toggle } = useModal();

  let animationProps = {
    animate: { rotateY: [180, 0]},
    transition: {duration: 2},
  }

  const handleFlip = ():void => {
    if (!flipped) {
      setFlipped(true)
    }
    if (flipped) {
      toggle();
    }
  }

  useEffect(() => {
    props.setCard(props.card);
  }, [])

  return (
    <div
    >
      <motion.img 
        className='card-img' 
        src={ flipped ? props.card.image : 'https://ik.imagekit.io/wvlrlc0tr/tarot/back.png'} 
        onClick={():void => handleFlip()}
        animate={flipped ? {rotateY: [90, 0]} : {rotateY: -180}}
        transition={{duration: .1}}
        whileHover={{
          scale: 1.02,
          y: -10
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