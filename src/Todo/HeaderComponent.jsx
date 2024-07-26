import { Link } from "react-router-dom"
import { Auth } from "./LoginLogic"
// import LogoutComponent from "./LogoutComponent"
function HeaderComponent(){
    const context = Auth()

    return(
        <div className="container">
            <div className="header">
                Header <hr />
                <div>const <Link to="/logout" onClick={context.logout}>Logut {context.isAuthenticated.toString()}</Link></div>
            </div>
        </div>
    )
}

export default HeaderComponent