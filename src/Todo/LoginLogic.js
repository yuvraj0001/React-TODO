import { useContext, useState } from "react"
import { createContext } from "react"

export const AuthProvider = createContext()
export const Auth =()=> useContext(AuthProvider)
export  default function LoginLogic({children}){

    const [isAuthenticated, setAuthenticate] = useState(false)
    const test = "test"
    function login(username, password){
        if(username==='user' && password==='pass'){
            // console.log(arr)
            setAuthenticate(true)
            return true
        }
        else{
            setAuthenticate(false)
            return false
        }
    }

    function logout(){
        setAuthenticate(false)
    }


    return(
        <AuthProvider.Provider value={{isAuthenticated, setAuthenticate, login, logout, test}}>
            {children}
        </AuthProvider.Provider>
    )
}