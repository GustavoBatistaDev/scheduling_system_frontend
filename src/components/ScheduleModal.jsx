/* eslint-disable react/prop-types */
import Modal from 'react-modal';

export const ScheduleModal = ({ isOpen, onRequestClose, maxWidth = 700 }) => {
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
    <h2>Agendar</h2>
     <hr className="line" />
      <form className='container-form-modal' action="">
        <div  className="cp-1">
            <div>
                  <label className='bold' htmlFor="">Motivo da consulta</label> <br />
                  <input required type="text" className='input-dashboard' />
                </div>
                <div>
                  <label className='bold' style={{margin: '8px 0'}} htmlFor="">Alguma necessidade especial?</label> <br />
                  <textarea name="" style={{
                    width: '100%',
                    borderRadius: '4px',
                    margin: '8px 0',
                    minHeight: '185px',
                    maxHeight: '185px',
                    padding: '8px'
                  }} rows="10"></textarea>
                </div>
              <div>
                <label className='bold' style={{margin: '8px 0'}} htmlFor=""></label> <br />
                <input type="submit" className='send-profile' />
                <button className='profile-button' onClick={onRequestClose}>Cancelar</button>
              
            </div>
        </div>
        <div className="cp-2">
            <div>
                <label className='bold' htmlFor="">Data *</label> <br />
                <input required type="date" className='input-dashboard' />
            </div>
             <div>
                <label className='bold' htmlFor="">Hora</label> <br />
                <input required type="time" className='input-dashboard' />
            </div>
             <div>
                <label className='bold' htmlFor="">Especialista</label> <br />
                <select name="" className='input-dashboard' id="">
                  <option value="O">Ortopedista</option>
                  <option value="CL">Clínico geral</option>
                  <option value="CL">Oftalmologista</option>
                </select>
            </div>
             <div>
                <label className='bold' htmlFor="">PCD</label> <br />
                 <select name="" className='input-dashboard' id="">
                  <option value="Y">Sim</option>
                  <option value="N">Não</option>
                
                </select>
                <label className='bold' htmlFor="">Doença crônica</label> <br />
                  <select name="" className='input-dashboard' id="">
                  <option value="Y">Sim</option>
                  <option value="N">Não</option>
                </select>
                
            </div>
        </div>
      </form>
   
    </Modal>
  );
};



 
