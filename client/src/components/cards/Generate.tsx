import React, { useState } from 'react'
import { Button } from '../../styled-components/styles';
import Cards from './Cards';

const Generate = () => {

  const [generate, setGenerate]: [boolean, (value: boolean) => void] = useState<boolean>(false);

  return (
    <div>
      <div style={generate ? {display: 'none'} : {display: 'block'}}>
        <p>Get your daily tarot reading now...</p>
        <Button style={{backgroundColor: '#fff', color: '#303030'}} onClick={():void => setGenerate(true)}>Generate</Button>
      </div>
      <div>
        <Cards generate={generate} />
      </div>
    </div>
  )
}

export default Generate