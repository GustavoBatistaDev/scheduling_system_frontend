const App = () => {
 

  return (
    <>
     
      <main className="main-content">
        <section className="container-form">
          <h1 className="form-title">Login</h1>
          <h5 className="form-sub-title"><span className="new-user">Novo usuário?</span><a href="" className="register" style={{color: '#1473E6'}}> Crie uma conta</a></h5>
          <h5 className="form-span">Endereço de email</h5>

          <input className="input-email" type="email" /><br />
          <button className="continue">Continuar</button>
         <h5 className="forgot-password">Esqueçeu sua senha?</h5>
             <hr style={{ border: '.1% solid #EAEAEA'}} />
        </section>
      </main>
    </>
  )
}

export default App
