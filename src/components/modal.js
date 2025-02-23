import React from 'react';

const Modal = ({ app, viewedApps, onClose }) => (
  <div className="modal">
    <button onClick={onClose}>Close</button>
    <h2>{app.name}</h2>
    <p>{app.description}</p>
    <a href={app.url} target="_blank" rel="noopener noreferrer">Visit {app.name}</a>

    <h3>Últimas ferramentas visualizadas:</h3>
    <ul>
      {viewedApps.map((app, index) => (
        <li key={index}>{app.name}</li>
      ))}
    </ul>
  </div>
);

export default Modal;
