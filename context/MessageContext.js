import React, { createContext, useState } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    message: "",
    recipientNumber: 0,
  });

  const setMessageValues = (key, values) => {
    setMessage({
      ...message,
      [key]: values,
    });
  };

  return (
    <MessageContext.Provider value={{ message, setMessageValues }}>
      {props.children}
    </MessageContext.Provider>
  );
}
