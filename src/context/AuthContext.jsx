/* eslint-disable react/prop-types */
// AuthContext.js
import { createContext, useContext } from 'react';
import { removeJwtToLocalStorage, setJwtToLocalStorage } from '../services/jwtsServices';
import { removeDataUserFromLocalStorage } from '../services/user_profile/removeUserData.service';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const login = (token) => {
    setJwtToLocalStorage(token);
  };

  const logout = () => {
    removeJwtToLocalStorage();  
    removeDataUserFromLocalStorage();
    
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
