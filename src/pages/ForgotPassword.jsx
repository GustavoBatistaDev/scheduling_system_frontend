import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
   return(
     <>
        <main className="main-content">
            <section className="container-form">
            <h1 className="form-title">Recuperar</h1>
            <h5 className="form-sub-title"><span className="new-user">Novo usuário?</span><Link to="/registrar" className="register" style={{color: '#1473E6'}}> Crie uma conta</Link></h5>
            <h5 className="form-span">Endereço de email</h5>
            <input className="input" type="email" /><br />
            
            <button className="continue">Continuar</button>
           
            </section>
        </main>
    </>
   );
};