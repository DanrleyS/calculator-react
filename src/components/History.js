import React from 'react';

const History = ({ history, onSelectHistory }) => {
  return (
    <div className="history">
      <h2 className="historico">Histórico</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index} onClick={() => onSelectHistory(entry.expression)}>
            {entry.expression} = {entry.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
