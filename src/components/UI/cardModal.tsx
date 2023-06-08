import React from 'react';

const Modal = ({ item, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Modal;
