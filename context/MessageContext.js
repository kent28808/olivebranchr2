import React, { createContext, useState } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    message: "",
    recipientNumber: 0,
  });

  return (
    <MessageContext.Provider value={message}>
      {props.children}
    </MessageContext.Provider>
  );
}
