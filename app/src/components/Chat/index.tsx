import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import { AiOutlineEnter } from "react-icons/ai";
import { Socket } from "socket.io-client";
import { Modal } from "repopup";
import { ModalProps } from "repopup/build/components/Modal/Modal";
import Messages from "./interfaces/Message";


interface IChat {
  socket: Socket,
  name: string
}

const Chat = ({ socket, name }: IChat) => {

  const [messages, setMessages] = useState<Messages[]>([]);

  const message = useRef<HTMLTextAreaElement>(null);

  const [modalData, setModalData] = useState({} as ModalProps);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    socket.on("sendMessage", (data: Messages) => setMessages([...messages, data]));
    socket.on("chatBackup", (data: Messages[]) => setMessages(data));
  }, [messages])

  const checkChat = () => {

    if (message.current) {
      if (message.current.value.length <= 0) {
        setOpenModal(true);
        setModalData({
          onRequestClose: () => setOpenModal(false),
          open: openModal,
          icon: "warning",
          title: "Message too short!!",
          subtitle: "The message you are trying to send is too short.",
        });
        return;
      }
      if (name === null || name.length <= 3) {
        setOpenModal(true);
        setModalData({
          onRequestClose: () => setOpenModal(false),
          open: openModal,
          icon: "warning",
          title: "Invalid Name!!",
          subtitle: "You have not defined your name, or your name is too short.",
        });
        return;
      }
      socket.emit("sendMessage", {
        name,
        message: message.current.value
      });

      message.current.value = '';
    }
  }

  return <>
    <S.Container>
      <S.ChatBox>
        <S.MessagesBox>
          {
            messages.map((data, id) => (
              <div className={data.name == name ? "me" : "other"} key={id}>
                <strong >{data.name}</strong>
                <br />
                <span>{data.message}</span>
              </div>
            ))
          }
        </S.MessagesBox>
        <S.SendMessage>
          <textarea placeholder="Message" ref={message} />
          <AiOutlineEnter onClick={checkChat} />
        </S.SendMessage>
      </S.ChatBox>
    </S.Container>
    <Modal
      {...modalData}
      open={openModal}
    />
  </>
}

export default Chat;