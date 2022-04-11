import React, { createContext, useState, useEffect } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    message: "",
    recipientNumber: 0,
    imgURL: "",
  });

  const setMessageValues = (key, value) => {
    setMessage({
      ...message,
      [key]: value,
    });
  };

  useEffect(() => {
    // Check to make sure fields aren't blank
    if (
      message.senderName === "" ||
      message.recipientName === "" ||
      message.recipientNumber === 0
    )
      return;
    (async function sendMessage() {
      const res = await fetch("/api/sendMessage", {
        body: JSON.stringify({
          recipientNumber: message.recipientNumber,
          recipientName: message.recipientName,
          senderName: message.senderName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      console.log(result);
    })(); // Immediately call the function after checking message obj
  }, [message.recipientNumber]); // Only re-run effect if recipientNumber changes

  return (
    <MessageContext.Provider value={{ message, setMessageValues }}>
      {props.children}
    </MessageContext.Provider>
  );
}
