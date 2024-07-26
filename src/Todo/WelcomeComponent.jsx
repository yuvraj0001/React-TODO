import { useParams, Link } from "react-router-dom";

function WelcomeComponent(){
    const {username} = useParams();
    return(
        <div className="WelcomeComponent">
            <div>{username} WelcomeComponent to the page</div>
            <div><Link to="/todos">Go Here</Link></div>
        </div>
    )
}

export default WelcomeComponent