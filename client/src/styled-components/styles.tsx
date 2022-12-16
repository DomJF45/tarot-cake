import styled from 'styled-components';

export const Button = styled.button`
  background-color: #303030;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: .3s ease-in-out;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    transform: scale(1.05);
    transition: .3s ease-in-out;
  }
`

export const Form = styled.form`
  

`

export const Card = styled.div`
  background-color: #fff;
  width: 70%;
  height: auto;
  margin: 0 auto;
  margin-top: 8vh;
  border-radius: 20px;
  color: #303030;
  padding: 1rem;
`
export const Modal = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const DivDivider = styled.div`
  height: 3px;
  border-radius: 8px;
  background-color: #303030;
  width: 100%;
`

export const TextContainer = styled.div`
  margin-block: 4rem;
  line-height: 150%;
`