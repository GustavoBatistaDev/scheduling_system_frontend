export const MedicalAppointment = () => {
    return (
        <div className="container-dashboard-appontment">
        
            <div className="col-1">
                <h3 style={{position:'absolute', zIndex: '1'}} className="title-col-1">Agendar Consulta</h3>
                <form  className="form-dashboard form1" action="">
                    <label  className="text-color" htmlFor="">Nome</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Último nome</label>
                    <input type="text" className="input-dashboard" />
                    
                    <label  className="text-color" htmlFor="">Email</label>
                    <input type="email" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Cpf</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Telefone</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Data de nascimento</label>
                    <input type="date" className="input-dashboard" />
                  
                    <input type="submit" value="Agendar consulta" className="submit-dashboard" />
                </form>
            </div>
            <div className="col-2">
                <form className="form-dashboard" action="">
                    
                    <label  className="text-color" htmlFor="">Especialidade</label>
                    <select className="input-dashboard" name="" id="">
                        <option value="s">Ortopedista</option>
                        
                    </select>
          
                     <label  className="text-color" htmlFor="">RG</label>
                    <input type="date" className="input-dashboard" />
                    
                   
                </form>
                 <div className="col-2">
                <form className="form-dashboard" action="">
                    
                    <label  className="text-color" htmlFor="">Acompanhante</label>
                    <select className="input-dashboard" name="" id="">
                        <option value="s">Sim</option>
                        <option value="n">Não</option>
                    </select>
                    <label  className="text-color" htmlFor="">Nome acompanhante</label>
                    <input type="text" className="input-dashboard" />
                    
                    <input type="submit" value="Editar acompanhante" className="submit-dashboard" />
                </form>
               
            </div>
            </div>
           
        </div>
    );
};