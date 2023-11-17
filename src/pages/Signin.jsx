import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginrUser } from '../services/loginUser';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export const Signin = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
        const response = await loginrUser(data);

        if(response.data.user.id){
            toast.success(`Bem vindo(a), ${response.data.user.first_name}`);
            reset();
            login(response.data.token);
          
            navigate('/painel/consulta');
        }

    } catch (error) {
        toast.error(`${error?.response?.data?.message}`);
    }
  };
  

  return (
    <>
      <main className="main-content">
        <section className="container-form">
          <h1 className="form-title">Inscreva-se</h1>
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
