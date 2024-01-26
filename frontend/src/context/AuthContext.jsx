import {  createContext, useState, useEffect } from "react";

 export const AuthContext = createContext();

const AuthContextAPI = (props) => {
  const { children } = props;
  const [auth, setauth] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    // console.log(token);
    //    if(token){
    //     setauth(true)
    //    }
    token && setauth(true);
  }, []);
  return <AuthContext.Provider value={{auth,setauth}}>{children}</AuthContext.Provider>;
};
export default AuthContextAPI;
