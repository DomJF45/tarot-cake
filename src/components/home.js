import React, { Component } from 'react'
import App from '../App';
import './home.css';


export default class Home extends Component {
    render(){
        return (
            <div>
              <meta charSet="utf-8" />
              <title>Daily Tarot</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="stylesheet" href="style.css" />
              <hr className='divider' />
              <div className='title'>
                <h1>Daily Tarot</h1>
              </div>
              
            </div>
          );
    }
}
