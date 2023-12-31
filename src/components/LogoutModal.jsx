/* eslint-disable react/prop-types */
// LogoutModal.js

import Modal from 'react-modal';

const LogoutModal = ({ isOpen, onRequestClose, onConfirm, maxWidth = 200 }) => {
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
          maxHeight: 120,
          margin: 'auto',
        },
      }}
    >
      <h3 style={{textAlign:'center', marginBottom:'20px'}} className='text-color'>Tem certeza que deseja sair?</h3>
      <div style={{display:'flex', justifyContent:'center'}}>
        <button className='yes' onClick={onConfirm}>Sim</button>
        <button className='no' onClick={onRequestClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
