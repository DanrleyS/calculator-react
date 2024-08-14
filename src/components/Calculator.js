import React, { useState, useEffect } from 'react';
import { evaluate, format } from 'mathjs';

const Calculator = ({ onAddToHistory, onSetInput }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (onSetInput) {
      setInput(onSetInput);
    }
  }, [onSetInput]);

  const handleButtonClick = (value) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(prev => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const evalResult = evaluate(input);
      setResult(format(evalResult, { notation: 'fixed' }));
      onAddToHistory({ expression: input, result: evalResult });
    } catch (error) {
      setResult('Error');
    }
  };

  const handleFunction = (fn) => {
    setInput(prev => `${fn}(${prev})`);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div>{result}</div>
      </div>
      <div className="buttons">
        <button className="full" onClick={handleClear}>C</button>
        <button className="backspace" onClick={handleBackspace}>←</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="double" onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="advanced" onClick={() => handleFunction('sin')}>sin</button>
        <button className="advanced" onClick={() => handleFunction('cos')}>cos</button>
        <button className="advanced" onClick={() => handleFunction('tan')}>tan</button>
        <button className="advanced" onClick={() => handleFunction('log')}>log</button>
        <button className="advanced" onClick={() => handleFunction('exp')}>exp</button>
        <button className="advanced" onClick={() => handleFunction('sqrt')}>√</button>
      </div>
    </div>
  );
};

export default Calculator;
