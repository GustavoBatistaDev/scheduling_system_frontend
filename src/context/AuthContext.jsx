/* eslint-disable react/prop-types */
// AuthContext.js
import { createContext, useContext } from 'react';
import { removeJwtToLocalStorage, setJwtToLocalStorage } from '../services/jwtsServices';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const login = (token) => {
    setJwtToLocalStorage(token);
  };

  const logout = () => {
    removeJwtToLocalStorage();  
    
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
