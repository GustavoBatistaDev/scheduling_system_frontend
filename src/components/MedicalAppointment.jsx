export const MedicalAppointment = () => {
    return (
         <div className="consulta">
            
            <form className='form-consulta' action="">
                    <h4 className='darkgray' style={{marginBottom: '20px' }}>Marcar consulta</h4>
                <input className='input' type="text" placeholder='Nome completo...' />
                <input className='input' type="text" placeholder='Email...' />
                <input className='input' type="tel" placeholder='Telefone...' />
                <input className='input' type="date" placeholder='Telefone...' />
                <select className='option' name="" id="">
                    <option className='' value="ort">Ortopedista</option>
                    <option  className='' value="oft">Oftomologista</option>
                </select>
                <button className='send'>Enviar</button>
            </form>
        </div>
    );
};