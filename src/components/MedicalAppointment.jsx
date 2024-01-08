import { useState } from "react";
import { ScheduleModal } from "./ScheduleModal";
import CancelModal from "./cancelModal";
import { registerAppointment } from "../services/appointments/createAppointment.service";
import { toast } from "react-toastify";

export const MedicalAppointment = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalCancelOpen, setModalCancelOpen] = useState(false);

    const closeModal = () => {
      setModalOpen(false);
    };

    const openModal = () => {
      setModalOpen(true);
    };

    const openCancelModal = () => {
      setModalCancelOpen(true);
    };

    const closeCancelModal = () => {
      setModalCancelOpen(false);
    };

    const createAppointment = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
    
      const objectAppointment = {
        day: formData.get('day'),
        hour: formData.get('hour'),
        pcd: formData.get('pcd'),
        chronic_disease: formData.get('chronic_disease'),
        special_need:  formData.get('special_need'),
        reason_for_consultation: formData.get('reason_for_consultation'),
        specialties_id: formData.get('specialties_id'),
      };
      
       try {
        const response = await registerAppointment(objectAppointment);
      
        console.log(response)

        if (response.status >= 200 && response.status < 300) {
          // Requisição bem-sucedida
          toast.success('Consulta agendada com sucesso!');
          closeModal();
      } else {
     
       toast.error(`${response.response.data.message}`);
        }
      } catch (error) {
        // Erro na requisição ou erro de rede
          
        
        
      }



       
      };

    

    return (
      <div className="container-dashboard agendamento" style={{alignItems: 'center', maxHeight: '380px'}}>
        
  
        <CancelModal isOpen={isModalCancelOpen} onRequestClose={closeCancelModal} />
        <ScheduleModal submitFunction={createAppointment} title="" isOpen={isModalOpen} onRequestClose={closeModal} />
        <div className="to-schedule">
        <button onClick={openModal} className="toschedule"><i onClick={closeModal} className="fa-solid fa-plus"></i> &nbsp;Agendar</button>
        <div className="search">
             <input type="search" className="input-search" placeholder="Pesquise..." />
            <button className="btn-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
       
        <table  className="simple-table">
      <thead >
        <tr >
            <th>ID</th>
            <th>Especialidade</th>
            <th>Doutor</th>
            <th>Data</th>
            <th>Data Solicitação</th>
            <th>Status</th>
            <th>Ação</th>
            <th>Reagendar</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge cancel">Cancelado</button></td>
          <td ><button onClick={openCancelModal} className="action cancel">Cancelar</button></td>
           <td ><button onClick={openModal} className="action reagendar">Reagendar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge pending">Pendente</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
           <td ><button onClick={openModal} className="action reagendar">Reagendar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge pending">Pendente</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
          <td ><button onClick={openModal} className="action reagendar">Reagendar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td ><button className="badge concluded">Concluído</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
          <td ><button onClick={openModal} className="action reagendar">Reagendar</button></td>
          
          
        </tr>
        

      </tbody>
    </table>
   
</div>
</div>
    );
};

