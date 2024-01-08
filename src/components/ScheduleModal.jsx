/* eslint-disable react/prop-types */
import Modal from 'react-modal';

export const ScheduleModal = ({ submitFunction, title, isOpen, onRequestClose, maxWidth = 700 }) => {
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
    <h2>{title}</h2>
     <hr className="line" />
      <form onSubmit={(event) => submitFunction(event)} className='container-form-modal' action="">
        <div  className="cp-1">
            <div>
                  <label className='bold' htmlFor="">Motivo da consulta</label> <br />
                  <input required placeholder='Digite aqui...' name='reason_for_consultation' type="text" className='input-dashboard' />
                </div>
                <div>
                  <label className='bold' style={{margin: '8px 0'}} htmlFor="">Alguma necessidade especial?</label> <br />
                  <textarea placeholder='Digite aqui...'  name="special_need" style={{
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
                <input required type="date" name='day' className='input-dashboard' />
            </div>
             <div>
                <label className='bold' htmlFor="">Hora</label> <br />
                <select className='input-dashboard' name="hour" id="hour">
                  <option value="">Selecione uma hora</option>
                  <option value="07:00:00">07:00:00 ás 08:00:00</option>
                  <option value="08:00:00">08:00:00 ás 09:00:00</option>
                  <option value="09:00:00">09:00:00 ás 10:00:00</option>
                  <option value="10:00:00">10:00:00 ás 11:00:00</option>
                  <option value="11:00:00">11:00:00 ás 12:00:00</option>
                  <option value="12:00:00">12:00:00 ás 13:00:00</option>
                  <option value="13:00:00">13:00:00 ás 14:00:00</option>
                  <option value="14:00:00">14:00:00 ás 15:00:00</option>
                  <option value="15:00:00">15:00:00 ás 16:00:00</option>
                  <option value="16:00:00">16:00:00 ás 17:00:00</option>

                </select>
            </div>
             <div>
                <label className='bold' htmlFor="">Especialista</label> <br />
                <select name="specialties_id" className='input-dashboard' id="">
                  <option value="1">Ortopedista</option>
                  <option value="2">Clínico geral</option>
                  <option value="3">Oftalmologista</option>
                  <option value="7">Ginecologista</option>
                </select>
            </div>
             <div>
                <label className='bold' htmlFor="">PCD</label> <br />
                 <select name="pcd" className='input-dashboard' id="">
                  <option value="S">Sim</option>
                  <option value="N">Não</option>
                
                </select>
                <label className='bold' htmlFor="">Doença crônica</label> <br />
                  <select name="chronic_disease" className='input-dashboard' id="">
                  <option value="S">Sim</option>
                  <option value="N">Não</option>
                </select>
                
            </div>
        </div>
      </form>
   
    </Modal>
  );
};



 
