/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import { Signin } from './pages/signin.jsx';
import { Signup } from './pages/Signup.jsx';
import { ForgotPassword } from './pages/ForgotPassword.jsx';
import { UpdatePassword } from './pages/UpdatePassword.jsx';

import 'react-toastify/dist/ReactToastify.min.css';
import Dashboard from './pages/Dashboard.jsx';
import { MedicalAppointment } from './components/medicalAppointment.jsx';
import { Profile } from './components/Profile.jsx';
import { Contato } from './components/Contato.jsx';
import { getJwtService } from './services/getJwt.service.js';


const RouteGuard = ({ children }) => {
    const token = getJwtService();
    
    return token ? children: <Navigate to="/"/>
      
};


export const MyRoutes = () => {
    return (

      <Router>
        <Routes>
          <Route path="painel/" element={<RouteGuard><Dashboard /></RouteGuard>}>
            <Route path='consulta' element={<MedicalAppointment/>}/>
            <Route path='perfil' element={<Profile/>}/>
            <Route path='contato' element={<Contato/>}/>
          </Route>
         
          <Route path="recuperar-senha/" element={<ForgotPassword />} /> 
          <Route path="alterar-senha/:token" element={<UpdatePassword />} />  
          <Route path="recuperar-senha/:token" element={<ForgotPassword />} />  
          <Route path="registrar/" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
    );
};


