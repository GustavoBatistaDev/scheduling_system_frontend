import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Signin } from './pages/signin.jsx';
import { Signup } from './pages/Signup.jsx';
import { ForgotPassword } from './pages/ForgotPassword.jsx';
import { UpdatePassword } from './pages/UpdatePassword.jsx';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { Dashboard } from './pages/Dashboard.jsx';

const Root = (

  <>
     <ToastContainer/>
      <Router>
        <Routes>
          <Route path="dashboard/" element={<Dashboard />} />
          <Route path="recuperar-senha/" element={<ForgotPassword />} /> 
          <Route path="alterar-senha/:token" element={<UpdatePassword />} />  
          <Route path="recuperar-senha/:token" element={<ForgotPassword />} />  
          <Route path="registrar/" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
  </>

);

ReactDOM.createRoot(document.getElementById('root')).render(Root);
