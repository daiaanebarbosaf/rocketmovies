import { createContext, useContext } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  async function signIn({ email, password}){

    try {
      const response = await api.post("/sessions", { email, password });
      console.log(response);
    } catch (error) {
      
    }

  }

  return(
    <AuthContext.Provider value={{email: 'rodrigo@email.com'}}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }