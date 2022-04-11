import React, { createContext, useState } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  // const [url,setUrl]= useState('')
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    message: "",
    recipientNumber: 0,
  });
  
  const setMessageValues = (key, value) => {
    setMessage({
      ...message,
      [key]: value,
    });
  };
  
  return (
    <MessageContext.Provider value={{ message, setMessageValues }}>
      {props.children}
    </MessageContext.Provider>
  );
}
