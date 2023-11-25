export const Contato = () => {
    return (
      <div className="container-dashboard-contact">
        
            <div className="col-1">
                <h3 style={{position:'absolute', zIndex: '1'}} className="title-col-1">Contato</h3>
                <form  className="form-dashboard form-contact" action="">
                    <label className="text-color" htmlFor="">Nome</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Telefone</label>
                    <input type="text" className="input-dashboard" />
                    <label className="text-color" htmlFor="">Mensagem</label>
                    <textarea name="" id="" className="message" cols="30" rows="10"></textarea>
                    <input style={{marginTop:'16px'}}  type="submit" value="Editar perfil" className="submit-dashboard" />
                </form>
            </div>
          
          
        </div>
    );
};