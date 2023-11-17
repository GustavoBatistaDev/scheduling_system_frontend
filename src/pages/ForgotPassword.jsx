import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { recoverPasswordSendMail } from '../services/recoverPasswordSendMail';

export const ForgotPassword = () => {

  const { register, handleSubmit, reset } = useForm();


  const onSubmit = async (data) => {
    try {
      //response.response.data.message
        const response = await recoverPasswordSendMail(data);
        reset();
        toast.success(response?.data?.message);
    
      
    } catch (error) {
        console.log(error)
        toast.error(`${error?.response?.data?.message}`);
    }
  };


  return (
    <>
      <main className="main-content">
        <section className="container-form">
          <h1 className="form-title">Recuperar senha</h1>
          <h5 className="form-sub-title">
            <span className="new-user">Não possui conta?</span>
            <Link to="/registrar" className="register" style={{ color: '#1473E6' }}>
              &nbsp;Registre-se
            </Link>
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}  style={{display: 'flex', flexDirection:'column'}} action="">
            <h5 className="form-span">Endereço de email</h5>
          <input {...register("email", { required: true })} required className="input" type="email" name="email" />
  
          <br />
         
          <button className="continue">Continuar</button>
         <h5 className="forgot-password"><Link to="/recuperar-senha">Esqueceu sua senha?</Link></h5>
          </form>
        </section>
      </main>
    </>
  );
};
