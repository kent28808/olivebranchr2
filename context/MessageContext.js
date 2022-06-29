import React, { createContext, useState, useEffect } from "react";

export const MessageContext = createContext("Hello");

export default function MessageProvider(props) {
  const [message, setMessage] = useState({
    senderName: "",
    recipientName: "",
    recipientNumber: 0,
    imgURL: "",
    blobURL: "",
    audioFile: {},
  });

  const [ob, setOb] = useState({});

  const setMessageValues = (key, value) => {
    setMessage({
      ...message,
      [key]: value,
    });
  };

  const setObValues = (values) => {
    setOb((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  useEffect(() => {
    // If fields are blank, don't send message
    if (
      message.senderName === "" ||
      message.recipientName === "" ||
      message.recipientNumber === 0 ||
      message.blobURL === ""
    )
      return;
    const verifyCode = Math.random().toString(36).substring(2); // Remove "0"
    (async function uploadMsgData() {
      const res = await fetch("/api/oliveBranch", {
        method: "POST",
        body: JSON.stringify({
          recipientNumber: message.recipientNumber,
          recipientName: message.recipientName,
          senderName: message.senderName,
          imgURL: message.imgURL,
          blobURL: message.blobURL,
          verifyCode: verifyCode,
        }),
      });
      const result = await res.json();
      console.log(result);
    })(); // Immediately call the function after checking message obj
    (async function sendMessage() {
      const res = await fetch("/api/sendMessage", {
        body: JSON.stringify({
          recipientNumber: message.recipientNumber,
          recipientName: message.recipientName,
          senderName: message.senderName,
          imgURL: message.imgURL,
          verifyCode: message.verifyCode,
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
    <MessageContext.Provider
      value={{ message, setMessageValues, ob, setObValues }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}
