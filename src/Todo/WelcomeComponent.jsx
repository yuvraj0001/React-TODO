import {useParams, Link} from "react-router-dom";
import { retrieveHelloWorldBean } from "./API/HelloWorldApiService";


// const [message, setMassage] = useState(null)


function callHelloWorldRestApi(){
    retrieveHelloWorldBean()
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('clean up'))
}

function successfulResponse(response){
    console.log(response)
}

function errorResponse(error){
    console.log(error)
}

function WelcomeComponent(){
    const {username} = useParams();
    return(
        <div className="WelcomeComponent">
            <div>{username} WelcomeComponent to the page</div>
            <div><Link to="/todos" onClick={callHelloWorldRestApi}>Go Here</Link></div>

        </div>
    )
}

export default WelcomeComponent