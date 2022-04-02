import React, { createContext, useState } from "react";
import { useContext } from "react/cjs/react.production.min";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    message: "",
    recipientNumber: 0,
  });

  const setMessageValues = (key, values) => {
    console.log("values", values, "key", key);
    setMessage((prevValues) => ({
      ...prevValues,
      [key]: values,
    }));
    console.log("Message:", message); // Does not show updated message here
  };

  return (
    <MessageContext.Provider value={{ message, setMessageValues }}>
      {props.children}
    </MessageContext.Provider>
  );
}

// export const useMessageData = () => useContext(MessageContext);
