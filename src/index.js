import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './Chat';
import reportWebVitals from './reportWebVitals';

function Main() {
  const [showBot, setShowBot] = useState(false);

  const handleButtonClick = () => {
    setShowBot((prevShowBot) => !prevShowBot);
  };

  window.triggerBot = handleButtonClick;

  return (
    <React.StrictMode>
      {/* Rendering components based on state */}
      {showBot ? <Chat /> : <App />}
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);

export default Main;
