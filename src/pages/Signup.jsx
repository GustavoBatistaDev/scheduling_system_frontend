import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/registerUser';
import { toast } from 'react-toastify';


export const Signup = () => {

const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      //response.response.data.message
      const response = await registerUser(data);
     
       if(response.user){
          toast.success(response.message);
          reset();
          return;
      }

      if(response.response.status >= 400){
        toast.error(response.response.data.message);
        return;
      }
      
    } catch (error) {
        console.log(error);
    }
  };


  return (
    <>
      <main className="main-content">
        <section className="container-form">
          <h1 className="form-title">Inscreva-se</h1>
          <h5 className="form-sub-title">
            <span className="new-user">Possui conta?</span>
            <Link to="/" className="register" style={{ color: '#1473E6' }}>
              &nbsp;Faça login
            </Link>
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}  style={{display: 'flex', flexDirection:'column'}} action="">
            <h5 className="form-span">Endereço de email</h5>
          <input {...register("email", { required: true })} required className="input" type="email" name="email" />
  
          <br />
          <h5 className="form-span">Primeiro nome</h5>
          <input {...register("first_name", { required: true })} required className="input" type="text" name="first_name" />
          <br />
          <h5 className="form-span">Último nome</h5>
          <input {...register("last_name", { required: true })}  required className="input" type="text" name="last_name" />
          <br />
          <h5 className="form-span">Cpf</h5>
          <input {...register("cpf", { required: true })} required className="input" type="text" name="cpf" />
          
          
          <br />
          <h5 className="form-span">Senha</h5>
          <input {...register("password", { required: true })} required className="input" type="text" name="password" />
          <br />
          <button className="continue">Continuar</button>
          <h5 className="forgot-password"><Link to="/recuperar-senha">Esqueceu sua senha?</Link></h5>
          </form>
        </section>
      </main>
    </>
  );
};
