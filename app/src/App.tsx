import React, { useRef, useState } from 'react';
import Chat from './components/Chat';
import * as S from "./styled";
import socketClient from "socket.io-client";
import { SERVER_URL } from './config/properties';

const App = () => {

  const name = useRef<HTMLInputElement>(null);
  const [getName, setName] = useState('');

  const client = socketClient(SERVER_URL);

  return <>
    <S.Container>
      <S.InputBox>
        <span>Your Name</span>
        <input type="text" placeholder='Your Name' ref={name} />
      </S.InputBox>
      <S.Button
        onClick={() => setName(name.current?.value ?? '')}
      >SAVE</S.Button>
    </S.Container>

    <Chat
      socket={client}
      name={getName}
    />
  </>
}

export default App;