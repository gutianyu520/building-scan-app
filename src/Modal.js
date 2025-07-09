import React from 'react';

function Modal({ isOpen, onClose, onConfirm, message, confirmText = "確認", cancelText = "キャンセル" }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="modal-button confirm-button">
            {confirmText}
          </button>
          <button onClick={onClose} className="modal-button cancel-button">
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
