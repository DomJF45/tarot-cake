import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, ReactNode } from 'react'
import { Card } from '../../styled-components/styles';
import { Modal } from '../../styled-components/styles';


type Props = {
  children?: ReactNode,
  isOpen: boolean,
  toggle: () => void;
  card: {
    name: string,
    bio: string,
    image: string
  }
}

const CardModal = (props: Props) => {

  const [showModal, setShowModal]: [boolean, (prev: boolean) => void] = useState<boolean>(true);

  return (
    <>
      { props.isOpen && (
        
          <Modal onClick={props.toggle}>
            <motion.div
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01]
                },
                scale: {
                  type: 'tween',
                  damping: 5,
                  stiffness: 100,
                  restDelta: .001
                }
              }}
              style={{
                width: '100%',
                height: '100%',
              }}
            > 
              <Card style={props.isOpen ? {display: 'flex'} : {display: 'none'}}>
                {props.children}
              </Card>
            </motion.div>
          </Modal>
        
      )}
    </>
  )
}

export default CardModal