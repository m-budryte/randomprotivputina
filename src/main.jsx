import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SocialShare from './SocialShare';
import ActionResult from './ActionResult';
import ptngif from  "./assets/ptn.gif"
import ppp from "./assets/ppp.png"
import candidates from './candidatesData'; // Предполагается, что этот файл экспортирует массив объектов кандидатов
import './index.css'; 

function App() {
  const [candidate, setCandidate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPPP, setShowPPP] = useState(true);
  const [choiceMade, setChoiceMade] = useState(false);
  const [showSocialShare, setShowSocialShare] = useState(false);

  const handleStartAgain = () => {
    setCandidate(null);
    setShowPPP(true);
    setIsLoading(false); // Ensure loading state is reset
    setChoiceMade(false);
    setShowSocialShare(false);
  };

  const handleRandomSelection = () => {
    setIsLoading(true);
    setShowPPP(false); // Hide initial screen content
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * candidates.length);
      const selectedCandidate = candidates[randomIndex];
      setCandidate(selectedCandidate); // Set the randomly selected candidate
      setIsLoading(false); // Stop showing the loading indicator
      setChoiceMade(true);
      setShowSocialShare(true);
    }, 1500); // Simulate loading time
  };
  
  

  return (
    <div className="app-container">
      {showPPP && <img src={ppp} alt='ППП' className="ppp-image" />}
      {showPPP && <p className="intro-text">Если ощущение катастрофы достигло предела и ни один из предложенных путей не кажется правильным, то возможно, пришло время дать волю случаю. В Полдень Против Путина дайте свободу своему выбору с помощью магии рандома. Ведь когда все варианты кажутся неприемлемыми, случайный выбор может стать неожиданным способом выразить свой протест и добавить непредсказуемости в столь предсказуемый политический пейзаж. </p>}
      {showPPP && (
        <button className="button-style" onClick={handleRandomSelection}>Поехали!</button>
      )}
        {isLoading && <img className="loading-gif" src={ptngif} alt="Loading..." />}
        {isLoading && <p className="intro-text">Магия рандома работает...</p>}
        {choiceMade && !isLoading && <ActionResult candidate={candidate} />}
        {choiceMade && !isLoading && (
            <div className="action-container">
            {/* Показываем кнопку "Поделиться в соцсетях" только после выбора кандидата */}
            {showSocialShare && <SocialShare candidateName={candidate.name} candidateImage={candidate.image} />}
    
            {/* Кнопка "Еще раз" всегда отображается */}
            <button className="button-style" onClick={handleStartAgain}>Еще раз</button>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
            </div>
          </div>
        )}
          <div style={{ textAlign: 'center', marginTop: '20px' }}></div>
            <a href="https://www.buymeacoffee.com/mashab" target="_blank" rel="noopener noreferrer">
               Buy me a coffee ☕️
          </a>
    </div>

    
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
