/* eslint-disable react/prop-types */
// LogoutModal.js

import Modal from 'react-modal';

const ProfileModal = ({ isOpen, onRequestClose, maxWidth = 700 }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Logout"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: maxWidth,
          maxHeight: 500,
          margin: 'auto',
        },
      }}
    >
    <i onClick={onRequestClose} style={{float: 'right', fontSize: '22px', cursor:'pointer'}} className="fa-solid fa-xmark"></i>
    <h2>Alterar</h2>
     <hr className="line" />
     

    
    
      <form className='container-form-modal' action="">
        <div  className="cp-1">
            <div>
                <label className='bold' htmlFor="">RG</label> <br />
                <input type="number" className='input-dashboard' />
            </div>
            <div>
                <label className='bold' htmlFor="">CPF</label> <br />
                <input required type="text" className='input-dashboard' />
            </div>
            <div>
                <label className='bold' htmlFor="">Data de nascimento</label> <br />
                <input type="date" className='input-dashboard' />
            </div>
              <div>
                <label className='bold' htmlFor=""></label> <br />
                <input type="submit" className='send-profile' />
              <button className='profile-button' onClick={onRequestClose}>Cancelar</button>
              
            </div>
        </div>
        <div className="cp-2">
            <div>
                <label className='bold' htmlFor="">Primeiro nome *</label> <br />
                <input required type="text" className='input-dashboard' />
            </div>
             <div>
                <label className='bold' htmlFor="">Último nome</label> <br />
                <input required type="text" className='input-dashboard' />
            </div>
             <div>
                <label className='bold' htmlFor="">Email</label> <br />
                <input required type="email" className='input-dashboard' />
            </div>
             <div>
                <label className='bold' htmlFor="">Celular</label> <br />
                <input type="text" className='input-dashboard' />
            </div>
        </div>
      </form>
   
    </Modal>
  );
};

export default ProfileModal;
