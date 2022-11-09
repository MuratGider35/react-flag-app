import React, { createContext } from "react";
// import { useContext } from "react";
import { useState, useEffect } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContexProvider;
