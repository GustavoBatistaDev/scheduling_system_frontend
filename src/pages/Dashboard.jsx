import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LogoutModal from '../components/LogoutModal';
import { updateUserPhotoService } from '../services/user_profile/updateUserPhoto.service';
import { getDataProfileUser } from '../services/user_profile/getDataProfileUser.service';


const Dashboard = () => {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const [isOpenDeslogarModal, setIsOpenDeslogarModal] = useState(false);
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const inputFile = useRef();
  
  const [photoUser, setPhotoUser] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    if (photoUser) {
      localStorage.setItem('photoUser', JSON.stringify(photoUser));
    }
  }, [photoUser]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await getDataProfileUser();
          
        setPhotoUser(initialData.data.photo)
     
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const openLogoutModal = () => {
    setIsOpenLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setIsOpenLogoutModal(false);
  };

  const handleLogout = () => {
    logout();
    closeLogoutModal();
  };

  const closeDeslogarModal = () => {
    setIsOpenDeslogarModal(false);
  };

  const handleDeslogar = () => {
    closeDeslogarModal();
  };

  const uploadPhotoProfile = async (file) => {
    await updateUserPhotoService(file);
  };

  const handleFileChange = async () => {
    const file = inputFile.current.files[0];
    await uploadPhotoProfile(file);
    const response = await getDataProfileUser();

    setPhotoUser(response.data.photo);
  };

  return (
    <div className="dashboard">
      <div className="user">
        <div className="content-logged-user">
          <LogoutModal
            isOpen={isOpenDeslogarModal}
            onRequestClose={closeDeslogarModal}
            onConfirm={handleDeslogar}
          />

          <LogoutModal
            isOpen={isOpenLogoutModal}
            onRequestClose={closeLogoutModal}
            onConfirm={handleLogout}
            maxWidth={340}
          />

          <img
            className="user-image"
            src={photoUser}
            alt=""
          />
          <div style={{ margin: '8px' }}>
            <h4 className="text-color">Fernanda Torres</h4>
            <h6 className="text-color">
              <img
                className="dot"
                src="/public/Ellipse 1.svg"
                alt=""
              />{' '}
              Usuário
            </h6>
          </div>
        </div>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <span className='text-logo'>Logo</span>

        <div className="user-info">
          <img
            className="user-photo"
            src={photoUser}
            alt="User"
          />
          <div className="container-input-file">
            <form onSubmit={uploadPhotoProfile} action="">
              <label htmlFor="inputFile" className='edit'>
                <i className="fa-solid fa-square-pen"></i>&nbsp;Edit
              </label>
              <input
                id="inputFile"
                ref={inputFile}
                className='hidden'
                type="file"
                onChange={handleFileChange}
              />
              <button style={{display: 'none'}} type="submit" >Submit</button>
            </form>
          </div>
          <p className="">Fernanda Torres Góis</p>
        </div>
        <i onClick={() => setIsOpen(!isOpen)} className={`fa-solid ${isOpen ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
        <ul className="nav-links">
          <li>
            <i className="fa-solid fa-user icon-sidebar"></i>
            <Link to="/painel/perfil">Perfil</Link>
          </li>
          <li>
            <i className="fa-solid fa-plus icon-sidebar"></i>
            <Link to="/painel/consulta">Agendar</Link>
          </li>
          <li>
            <i className="fa-solid fa-address-book icon-sidebar"></i>
            <Link to="/painel/contato">Contato</Link>
          </li>
          <li>
            <i className="fa-solid fa-calendar-days icon-sidebar"></i>
            <Link to="/painel/agendamentos">Histórico</Link>
          </li>
        </ul>
        <i  onClick={openLogoutModal} className="fa-solid fa-right-from-bracket"></i>
      </div>

      <div  className="main">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
