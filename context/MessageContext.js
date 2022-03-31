import React, { createContext, useState } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    sender: "Cody",
    recipient: "Jen",
  });

  return (
    <MessageContext.Provider value={message}>
      {props.children}
    </MessageContext.Provider>
  );
}
