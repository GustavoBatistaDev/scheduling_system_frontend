export const Contato = () => {
    return (
         <div className="consulta">
            <form className='form-consulta' action="">
                <h4 className='darkgray' style={{marginBottom: '20px' }}>Envie uma mensagem</h4>
                <input className='input' type="text" placeholder='Nome completo...' />
                <label className="darkgray" htmlFor="" style={{marginTop:'16px'}}>Mensagem</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className='send'>Enviar</button>
            </form>
        </div>
    );
};