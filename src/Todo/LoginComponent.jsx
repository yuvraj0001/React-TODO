import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "./LoginLogic";

function LoginComponent(){

    const [username, setUsername]  =useState('')
    const [password, setPassword]  =useState('')
    const [arr, setSomething] = useState('')
    const navigate  = useNavigate();
    const authContext = Auth()


    function handleSubmit(){
        if(authContext.login(username, password)){
            setSomething('pass')
            navigate(`/WelcomeComponent/${username}`);
            // console.log(arr)
        }
        else{
            setSomething('fail')
            // console.log(arr)
        }
    }

    function SuccessMessage(){
        if(arr==='pass'){
            return <div>You are in</div>
        }
        else return null
    }

    


    return(
        <div className="Login">
            <div className="LoginForm">
                <SuccessMessage/>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)}/> 
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                </div>

                <button type="button" name="login" onClick={handleSubmit}>Login: {arr}</button>
            </div>
        </div>

    )
}

export default LoginComponent