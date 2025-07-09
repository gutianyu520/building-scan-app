import React from 'react';

function Modal({ isOpen, onClose, onConfirm, message, children, confirmText = "確認", cancelText = "キャンセル", showCancelButton = true }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Allow closing by clicking overlay */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent click propagation to overlay */}
        {message && <p className="modal-message">{message}</p>}
        {children} {/* Render children here for custom content */}
        <div className="modal-actions">
          {onConfirm && ( // Only show confirm button if onConfirm is provided
            <button onClick={onConfirm} className="modal-button confirm-button">
              {confirmText}
            </button>
          )}
          {showCancelButton && onClose && ( // Only show cancel if onClose and showCancelButton are true
            <button onClick={onClose} className="modal-button cancel-button">
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
