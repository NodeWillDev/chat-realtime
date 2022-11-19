import IMessage from "../interfaces/IMessage";

class Messages {

  private messages: IMessage[];

  constructor() {
    this.messages = [];
  }

  getMessages(): IMessage[] {
    return this.messages;
  }

  addMessage(message: IMessage): void {
    this.messages.push(message);
  }
}

export default Messages;