export const Profile = () => {
    return (
        <div className="container-dashboard">
        
            <div className="col-1">
                <h3 style={{position:'absolute', zIndex: '1'}} className="title-col-1 text-color">Editar Perfil</h3>
                <form  className="form-dashboard form1" action="">
                    <label  className="text-color" htmlFor="">Nome</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Último nome</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Foto</label>
                    <input type="file" className="input-dashboard" />
                    
                    <label  className="text-color" htmlFor="">Email</label>
                    <input type="email" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Cpf</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Telefone</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Data de nascimento</label>
                    <input type="date" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">RG</label>
                    <input type="text" className="input-dashboard" />
                    <input type="submit" value="Editar perfil" className="submit-dashboard" />
                </form>
            </div>
          
            <div className="col-3">
                 <form className="form-dashboard form3" action="">
                  <h3 style={{marginBottom: '16px'}} className="title-col-1">Editar senha</h3>
                    <label  className="text-color" htmlFor="">Senha atual</label>
                    <input type="text" className="input-dashboard" />
                    <label  className="text-color" htmlFor="">Nova senha</label>
                    <input type="text" className="input-dashboard" />
                     <label  className="text-color" htmlFor="">Nova senha</label>
                    <input type="email" className="input-dashboard" />
                    <input type="submit" value="Editar senha" className="submit-dashboard" />
                </form>
            </div>
        </div>
    );
};