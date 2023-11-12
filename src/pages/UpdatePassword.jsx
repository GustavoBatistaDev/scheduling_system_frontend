import { Link, useParams } from 'react-router-dom';

export const UpdatePassword = () => {

   const tokenObject = useParams();
   

    return (
         <>
            <main className="main-content">
                <section className="container-form">
                <h1 className="form-title">Alterar senha</h1>
                <h5 className="form-sub-title"><span className="new-user">Novo usuário?</span><Link to="/registrar" className="register" style={{color: '#1473E6'}}> Crie uma conta</Link></h5>
                <h5 className="form-span">Password</h5>
                <input className="input" type="email" /><br />
                <h5 className="form-span">Password novamente</h5>
                <input className="input" type="password" /><br />
                <input type="hidden" name='hash' value={tokenObject.token} />
                <button className="continue">Continuar</button>
                <h5 className="forgot-password">Esqueçeu sua senha?</h5>
                   
                </section>
            </main>
        </>
    );
};