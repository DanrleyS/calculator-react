import React, { useState } from 'react';
import Calculator from './components/Calculator';
import History from './components/History';
import './App.css';

const App = () => {
  const [history, setHistory] = useState([]);
  const [selectedExpression, setSelectedExpression] = useState('');

  const addToHistory = (entry) => {
    setHistory(prevHistory => [entry, ...prevHistory]);
  };

  const handleSelectHistory = (expression) => {
    setSelectedExpression(expression);
  };

  return (
    <div className="app">
      <div className="calculator-container">
        <Calculator 
          onAddToHistory={addToHistory} 
          onSetInput={selectedExpression}
        />
      </div>
      <div className="history-container">
        <History 
          history={history} 
          onSelectHistory={handleSelectHistory} 
        />
      </div>
    </div>
  );
};

export default App;
