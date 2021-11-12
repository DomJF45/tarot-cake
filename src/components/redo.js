import React, { Component } from 'react'
import App from '../App';
export default class Redo extends Component {
    render(){
        return(
        <div id="redo" style={{textAlign: 'center'}}>
            <button id="regen" style={{display: 'none'}} onclick="regenerateCards()">
                Regenerate
            </button>
        </div>
        );
    }
}