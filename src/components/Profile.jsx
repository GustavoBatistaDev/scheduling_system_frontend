export const Profile = () => {
    return (
         <div className="content">
            <div className="card-usuario">
                <img className='card-image' src="https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais"  />
              <div className='info'>
                  <h3 className='darkgray'>Fernanda Torres</h3>
                    <hr style={{marginBottom: '15px'}} />
                <h5 className='darkgray'>Cpf: 101.764.175-75</h5>
                 <h5 className='darkgray'>Email: fernandatorres@gmail.com</h5>
              </div>
            </div>
            <div className="form-change-data-profile">
               
                <form className='form' action="">
                     <h4 className='darkgray'>Alterar</h4>
                    <input className='input' type="text" placeholder='Nome...' />
                    <input className='input' type="text" placeholder='Último nome...' />
                    <input className='input' type="text" placeholder='Cpf...' />
                    <input className='input' type="text" placeholder='Email...' />
                    <input className='input' type="text" placeholder='Password...' />
                    <button className='send'>Enviar</button>
                </form>
            </div>
        </div>
    );
};