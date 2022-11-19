import styled from "styled-components";

export const Container = styled.div`

  background-color: rgba(46,46,46,0.30);
  width: 150%;
  height: 60%;
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  overflow: hidden;

`

export const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const SendMessage = styled.div`
  position: fixed;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 40px;
  margin: auto;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > textarea {

    width: 78%;
    height: 80px;
    max-width: 76%;
    margin-left: 2px;
    border: none;
    background-color: rgba(238,119,119,0.71);
    outline: none;
    color: white;
    padding: 6px;
    font-size: 16px;
    overflow-y: auto;
    resize: none;
    position: relative;
    
    ::placeholder {
      color: white;
      letter-spacing: 1.5px;
      opacity: 0.4;
    }
  }

  > svg {
    font-size: 64px;
    color: white;
    position: relative;
    bottom: 0px;
    transition: .4s;

    :hover {
      color: rgba(162,242,152);
      cursor: pointer;
    }
  }
`

export const MessagesBox = styled.div`
  padding: 2.5px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 80%;
  overflow-y: auto;

  > div {
    margin-top: 7px;
    margin-bottom: 7px;
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;

    > strong {
      letter-spacing: 2.75px;
    }
  }

  .me {
    border: 1px solid rgba(79,247,58,1);
    border-radius: 10px;
    background-color: rgba(86,201,78,0.5);
    color: rgba(192,246,176,1);
    text-align: left;    
  }

  .other {
    border: 1px solid rgba(44,239,235,1);
    border-radius: 10px;
    background-color: rgba(105,246,240,0.5);
    color: rgba(127,227,222,1);
    text-align: right;
  
  }
  

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`