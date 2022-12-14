import React, { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen]: [boolean, (prev: boolean) => void] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    toggle
  }

}

export default useModal;
