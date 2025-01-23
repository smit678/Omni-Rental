
import { createContext, useContext, useState ,useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children})=> {
  
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser]= useState("");
    const [isLoading, setIsLoading] = useState(true);
    

    const authorizationToken = `Bearer ${token}`; 

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token",serverToken) ;
    };


//logout show or not 
let isLoggedIn = !!token;




//logout functionality
const LogoutUser = ()=>{
    setToken("");
    return localStorage.removeItem("token");
};    




//jwt authantication - get the user data **Note**-it is only logged in user data that means onyl single person data woh loged in web 

const userAuthentication = async()=>{
try {
    setIsLoading(true);
    const response = await axios.get("http://192.168.1.15:5000/api/userd",{headers:{Authorization:`Bearer ${token}`,},});
    if(response.status){
         const data = await response.data;
        // console.log("user data",data.userData);
        setUser(data.userData);
        setIsLoading(false);
    }
 
} catch (error) {
    console.log(error.message);
}
};




useEffect(() => {
    
    userAuthentication();
    
}, []);



    return <AuthContext.Provider value = {{ storeTokenInLS , LogoutUser, isLoggedIn, user, authorizationToken, isLoading }}>
        {children}
    </AuthContext.Provider>
};


export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);

    if(!AuthContextValue){
        throw new Error("useAouth used outside of the Provider");
        
    }
    return AuthContextValue ;
};



