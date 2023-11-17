import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updatePassword } from '../services/updatePassword';

export const UpdatePassword = () => {

  const { register, handleSubmit, reset } = useForm();
  const tokenObject = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
        const response = await updatePassword(data);
        toast.success(response?.data?.message);
        reset();
        navigate('/');
    } catch (error) {
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
          <h5 className="form-span">Senha</h5>
          <input {...register("password", { required: true })} required className="input" type="password" name="password" /> <br />
          <h5 className="form-span">Senha novamente</h5>
          <input {...register("passwordConfirm", { required: true })} required className="input" type="password" name="passwordConfirm" />
          <br />
          <input  {...register("hash", { required: true })} type="hidden" name='hash' value={tokenObject.token} />
          <button className="continue">Continuar</button>
         <h5 className="forgot-password"><Link to="/recuperar-senha">Esqueceu sua senha?</Link></h5>
          </form>
        </section>
      </main>
    </>
  );
};
