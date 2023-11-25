import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LogoutModal from '../components/LogoutModal';

const Dashboard = () => {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const [isOpenDeslogarModal, setIsOpenDeslogarModal] = useState(false);
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  const openLogoutModal = () => {
    setIsOpenLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setIsOpenLogoutModal(false);
  };

  const handleLogout = () => {
    // Lógica de logout aqui
    logout();
    closeLogoutModal();
  };

  const closeDeslogarModal = () => {
    setIsOpenDeslogarModal(false);
  };

  const handleDeslogar = () => {
    // Lógica de deslogar aqui
    closeDeslogarModal();
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
            src="https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais"
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
        <div className="user-info">
          <img
            className="user-photo"
            src="https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais"
            alt="User"
          />
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
            <i className="fa-solid fa-address-book icon-sidebar"></i>
            <Link to="/painel/agendamentos">Agendamentos</Link>
          </li>
        </ul>
        <i  onClick={openLogoutModal} className="fa-solid fa-right-from-bracket"></i>
      </div>

      <div className="main">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
