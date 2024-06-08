import React, { useState } from 'react';
import { DeepChat } from 'deep-chat-react';
import './App.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'I am doing very well!' },
  ]);

  const handleMessageSubmit = (newMessage) => {
    // Log the user's message to the console
    console.log("User message:", newMessage);
  
    // Update the local state with the new user message
    setMessages(prevMessages => [
      ...prevMessages,
      { role: 'user', text: newMessage }
    ]);
  
    // Manually provide a default AI response
    const defaultResponse = "I'm an AI bot. How can I assist you today?";
  
    // Update the local state with the default AI response
    setMessages(prevMessages => [
      ...prevMessages,
      { role: 'ai', text: defaultResponse }
    ]);
  };
  

  return (
    <div className="App">
      <center>
        <h1>Chat with us</h1>
        <DeepChat
          request={{ url: "http://127.0.0.1:8080/chat" }}
          style={{ borderRadius: '10px' ,height:500, width:550}}
          textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
          initialMessages={messages}
          speechToText={true}
          textToSpeech={true}
          onMessageSubmit={handleMessageSubmit}
        />
      </center>
    </div>
  );
};

export default Chat;
