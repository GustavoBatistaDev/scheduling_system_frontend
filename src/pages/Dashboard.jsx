import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Certifique-se de instalar o react-router-dom se ainda não o fez


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
   
    return (
    <div className="dashboard">

        <div className={`sidebar ${isOpen ? 'open': 'closed'}`} >
        <div className="user-info">
            <img className="user-photo" src="https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais" alt="User" />
            <p className="">Fernanda Torres Góis</p>
        </div>
        <i onClick={() => setIsOpen(!isOpen)} className={`fa-solid ${isOpen ? 'fa-arrow-right': 'fa-arrow-left'}`}></i>
        <ul className="nav-links">
            <li>
            
            <Link to="/painel/perfil"><i className="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;Perfil</Link>
            </li>
            <li>
            <Link to="/painel/consulta"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;Consulta</Link>
            </li>
            <li>
            <Link to="/painel/contato"><i className="fa-solid fa-address-book"></i>&nbsp;&nbsp;&nbsp;&nbsp;Contato</Link>
            </li>
            
        </ul>
        <i className="fa-solid fa-right-from-bracket"></i>
        </div>

        {/* Conteúdo principal vai aqui */}
        <div className="main">
            <div className="content">
            <Outlet/>
        </div>

        </div>
    </div>
    );
};

export default Dashboard;
