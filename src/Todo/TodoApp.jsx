import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import LogoutComponent from './LogoutComponent'
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import ErrorComponent from "./ErrorComponent"
import WelcomeComponent from "./WelcomeComponent"
import TodoComponent from "./TodoCompnent"
import LoginComponent from "./LoginComponent"
import  LoginLogic  from "./LoginLogic"
import { Auth } from "./LoginLogic"


function AuthenticateRoue({children}){
    const authContext = Auth()
    if(authContext.isAuthenticated){
        return children
     }
    return <Navigate to="/" />
}


export default function TodoApp(){
    return(
        <>
        <LoginLogic>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={ <LoginComponent /> }></Route>
                    
                        <Route path="/WelcomeComponent/:username" element={<AuthenticateRoue> 
                                                                                <WelcomeComponent />
                                                                        </AuthenticateRoue>  } />
                        <Route path="/todos" element={<AuthenticateRoue>
                                                        <TodoComponent />
                                                    </AuthenticateRoue>  } /> 

                    <Route path="/logout" element={ <LogoutComponent /> }> </Route>

                    <Route path="*" element={ <ErrorComponent /> }> </Route>

                </Routes>
                <FooterComponent />
            </BrowserRouter>
            </LoginLogic>
        </>
    )
}








