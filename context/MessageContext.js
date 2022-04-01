import React, { createContext, useState } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    message: "",
    recipientNumber: 0,
  });

  const setMessageValues = (values) => {
    console.log(`This is ${message} and this is ${values}`);
    setMessage({ ...message, values });
  };

  return (
    <MessageContext.Provider value={(message, setMessageValues)}>
      {props.children}
    </MessageContext.Provider>
  );
}
