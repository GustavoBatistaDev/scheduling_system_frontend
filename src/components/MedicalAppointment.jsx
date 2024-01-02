import { useState } from "react";
import { ScheduleModal } from "./ScheduleModal";

export const MedicalAppointment = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
      setModalOpen(false);
    };

    const openModal = () => {
      setModalOpen(true);
    };

    return (
      <div className="container-dashboard agendamento" style={{alignItems: 'center', maxHeight: '420px'}}>
      
        <ScheduleModal isOpen={isModalOpen} onRequestClose={closeModal} />
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
          <td ><button className="action cancel">Cancelar</button></td>
           <td ><button className="action reagendar">Reagendar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge pending">Pendente</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
           <td ><button className="action reagendar">Reagendar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge pending">Pendente</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
          <td ><button className="action reagendar">Reagendar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td ><button className="badge concluded">Concluído</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
          <td ><button className="action reagendar">Reagendar</button></td>
          
          
        </tr>
        

      </tbody>
    </table>
    <div className="pagination">
        <div className="pag-item">1</div>
        <div className="pag-item">2</div>
        <div className="pag-item">3</div>
        <div className="pag-item">4</div>
    </div>
</div>
</div>
    );
};

