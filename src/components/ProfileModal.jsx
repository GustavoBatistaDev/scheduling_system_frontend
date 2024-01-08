/* eslint-disable react/prop-types */
// LogoutModal.js

import Modal from 'react-modal';

const ProfileModal = ({ dataUser, setDataUser, onSubmiFunction, isOpen, onRequestClose, maxWidth = 700 }) => {
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
     

    
    
      <form onSubmit={(event) => onSubmiFunction(event)} className='container-form-modal' action="">
        <div  className="cp-1">
            <div>
                <label className='bold' htmlFor="">RG</label> <br />
                <input 
                  placeholder='Digite aqui...' 
                  value={dataUser?.rg || ''}
                  type="number"
                  name='rg'
                  className='input-dashboard' 
                  onChange={(e) => setDataUser({ ...dataUser, rg: e.target.value })}
                  />
            </div>
            <div>
                <label className='bold' htmlFor="">CPF</label> <br />
                <input
                  placeholder='Digite aqui...'
                  value={dataUser?.cpf}
                  required type="text"
                  name='cpf'
                  className='input-dashboard'
                  onChange={(e) => setDataUser({ ...dataUser, cpf: e.target.value })}
                  />
            </div>
            <div>
                <label className='bold' htmlFor="">Data de nascimento</label> <br />
                <input 
                placeholder='Digite aqui...'
                type="date"
                name='date_of_birth'
                className='input-dashboard'
                
                />
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
                <input placeholder='Digite aqui...'
                  value={dataUser?.first_name}
                  required
                  type="text"
                  name='first_name'
                  className='input-dashboard'
                  onChange={(e) => setDataUser({ ...dataUser, first_name: e.target.value })}
                  />
            </div>
             <div>
                <label className='bold' htmlFor="">Último nome</label> <br />
                <input 
                  placeholder='Digite aqui...'
                  required
                  type="text"
                  value={dataUser?.last_name}
                  name='last_name'
                  className='input-dashboard'
                  onChange={(e) => setDataUser({ ...dataUser, last_name: e.target.value })}
                      />
            </div>
             <div>
                <label className='bold' htmlFor="">Email</label> <br />
                <input 
                  placeholder='Digite aqui...'
                  required 
                  type="email"
                  value={dataUser?.email} 
                  name='email'
                  className='input-dashboard' 
                  onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })}
                   />
            </div>
             <div>
                <label className='bold' htmlFor="">Celular</label> <br />
                <input
                  placeholder='Digite aqui...'
                  type="text"
                  value={dataUser?.phone}
                  name='phone'
                  className='input-dashboard'
                  onChange={(e) => setDataUser({ ...dataUser, phone: e.target.value })}
                   />
            </div>
        </div>
      </form>
   
    </Modal>
  );
};

export default ProfileModal;
