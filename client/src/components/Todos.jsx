const Todos = ({ todo, removeTodo, updateTodo }) => {
    return (
        <li className="flex p-4 w-full bg-grey rounded-sm">
            <input type="checkbox" className="py-4 px-2" />
            <p className="pl-5 px-2 text-md w-10/12">{todo.content}</p>
            <button className="bg-blue hover:bg-slate-400 transition duration-500 rounded-full w-7 h-7 mr-3 float-right" onClick={updateTodo}></button>
            <button className="bg-red hover:bg-slate-400 transition duration-500 rounded-full w-7 h-7 mr-3 float-right" onClick={removeTodo}></button>
        </li>
    )

}

export default Todos;