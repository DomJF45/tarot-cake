import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Generate from './components/generate';
import ReactCardFlip from 'react-card-flip';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

let face = false;
let back = false;

let prophecy1 = false;
let prophecy2 = false;
let prophecy3 = false;

let used = 1;
let unused = -1;
let temp = 0;
let usedArray = [];
let cards = [];



function App() {
  
  return (
    <div>
      <Navbar />
      <Home></Home>
      
      <Generate></Generate>
    </div>
    );
}
export default App;
