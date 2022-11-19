import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 300px;
  height: 210px;

  background-color: rgba(100,146,245,0.4);

  margin: auto;
  margin-top: 25px;
  overflow: hidden;

`

export const InputBox = styled.div`

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  color: white;

  > span {

    margin-top: 15px;

  }

  > input {
    padding: 20px;
    width: 95%;
    background-color: rgba(48,196,209,0.2);
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.27);
    outline: none;
    color: rgba(242,200,200,1);
    letter-spacing: 2.5px;
    transition: .5s;

    ::placeholder {
      color: white;
      text-align: center;
      letter-spacing: 3.5px;
      opacity: 0.3;
    }

    :focus {
      border-bottom: 1px solid white;
    }
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 6px;
  width: 90%;
  height: 45px;
  letter-spacing: 5px;
  background-color: rgba(255,255,255,0.17);
  transition: .3s;
  margin: auto;
  color: white;

  :hover {
    background-color: rgba(62,228,69,0.45);
    color: rgba(199,193,218,0.71);
    cursor: pointer;
    transform: scale(1.15);
  }
`

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: rgba(19,64,158,1);
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
`

export default GlobalStyled;