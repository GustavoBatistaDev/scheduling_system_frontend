export const Schedule = () => {
    return (
    
        <div className="container-dashboard"  style={{alignItems: 'center', maxHeight: '400px', position: 'relative'}}>
          <h1 style={{position: 'absolute', top: '10px', left:'10px', padding: '8px', color: '#1A202C'}}>Histórico</h1>
        <div className="to-schedule">
        <table  className="simple-table">
        <thead >
        <tr>
            <th>ID</th>
            <th>Especialidade</th>
            <th>Doutor</th>
            <th>Data</th>
            <th>Data Solicitação</th>
            <th>Status</th>
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
        
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge concluded">Concluído</button></td>
        
          
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td><button  className="badge cancel">Cancelado</button></td>
       
          
        </tr>
         <tr>
          <td>1</td>
          <td>Ortopedista</td>
          <td>Camilo Freitas Costa</td>
          <td>29/10/2023</td>
          <td>27/10/2023</td>
          <td ><button className="badge concluded">Concluído</button></td>
     
        </tr>
        

      </tbody>
    </table>
   
</div>
</div>
  
    );
};

