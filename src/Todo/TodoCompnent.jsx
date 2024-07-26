function TodoComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate())


    const todos = [ {id: 1, description:'AWS', done:false, targetDate:targetDate},
                    {id: 2, description:'SpringBoot', done:false, targetDate:targetDate},
                    {id: 3, description:'DevOps', done:false, targetDate:targetDate},]
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>done</th>
                        <th>targetDate</th>
                    </tr>
                </thead>
                <tbody>{
                    todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default TodoComponent