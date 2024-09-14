import { useEffect, useState } from "react"
import { deleteTodoAPI, retrieveAllTodosForUsername } from "./API/TodosApiService"
import { Auth } from "./LoginLogic"
// import retrieveAllTodosForUsername from 

function TodoComponent(){

    // const today = new Date()
    // const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate())


    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = Auth()
    const username = authContext.username


    useEffect(() => refreshTodos(),[])

    function refreshTodos(){
        retrieveAllTodosForUsername(username)
        .then(response => {
            console.log(response)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        console.log('clicked')
        deleteTodoAPI(username, id)
        .then(response => {
            setMessage(`deleated todo ${id}`)
            refreshTodos()
        })
        .catch(error => console.log(error))
    }

    return (

        <div>

        {message && <div className="alert alert-warning">{message}</div>}

        <div>
            <table>
                <thead>
                    <tr>
                        <th>description</th>
                        <th>done</th>
                        <th>targetDate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{
                    todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default TodoComponent