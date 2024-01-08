/* eslint-disable react/prop-types */
// LogoutModal.js

import Modal from 'react-modal';

const CancelModal = ({ isOpen, onRequestClose, onConfirm, maxWidth = 300 }) => {
  return (
    <Modal
      id='logout'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Logout"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: maxWidth,
          maxHeight:150,
          margin: 'auto',
        },
      }}
    >
      <h3 style={{textAlign:'center', marginBottom:'20px'}} className='text-color'>Tem certeza que deseja cancelar?</h3>
      <div style={{display:'flex', justifyContent:'center'}}>
        <button className='badge cancel' onClick={onConfirm}>Sim</button>
        <button className='no' onClick={onRequestClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default CancelModal;
