import { useContext, useState } from "react"
import { createContext } from "react"

export const AuthProvider = createContext()
export const Auth =()=> useContext(AuthProvider)
export  default function LoginLogic({children}){

    const [isAuthenticated, setAuthenticate] = useState(false)
    const [username, setUsername] = useState(null)

    // const test = "test"
    function login(username, password){
        if(username==='in28minutes' && password==='pass'){
            // console.log(arr)
            setUsername(username)
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
        <AuthProvider.Provider value={{isAuthenticated, setAuthenticate, login, logout, username}}>
            {children}
        </AuthProvider.Provider>
    )
}