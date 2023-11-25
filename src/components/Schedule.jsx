/* eslint-disable react/prop-types */
export const Schedule = () => {
    return (
      <table className="simple-table">
      <thead>
        <tr>
            <th>ID</th>
            <th>Especialidade</th>
            <th>Doutor</th>
            <th>Data</th>
            <th>Data Solicitação</th>
            <th>Status</th>
            <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge cancel">Cancelado</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge pending">Pendente</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge pending">Pendente</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td ><button className="badge concluded">Concluído</button></td>
          <td ><button className="action cancel">Cancelar</button></td>
        </tr>

      </tbody>
    </table>
    );
};