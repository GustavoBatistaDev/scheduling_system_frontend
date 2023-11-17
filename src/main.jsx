import ReactDOM from 'react-dom/client';
import './index.css';

import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { MyRoutes } from './routes.jsx';

const Root = (

  <AuthProvider>
     <ToastContainer/>
     <MyRoutes/>
  </AuthProvider>

);

ReactDOM.createRoot(document.getElementById('root')).render(Root);
