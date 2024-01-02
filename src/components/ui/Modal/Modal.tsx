import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
      <button className="modal-close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;
