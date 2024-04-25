import { useState, useEffect } from 'react';
import axios from 'axios';
import TodosForm from './components/TodosForm';
import Todos from './components/Todos';
import Footer from './components/Footer';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/todos')
      .then(response => {
        console.log('promise fulfilled')
        setTodos(response.data)
      })
  }, [])
  console.log('render', todos.length, 'todos')


  const completeTodo = () => {

  }

  const addTodo = () => {
    event.preventDefault();
    console.log('add button clicked', event.target);
  }

  const removeTodo = () => {
    event.preventDefault();
    console.log('remove button clicked', event.target);
  }

  const updateTodo = () => {
    event.preventDefault();
    console.log('update button clicked', event.target);
  }

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value);
  }

  const todosToShow = showAll
    ? todos
    : todos.filter(todo => todo.complete === true)

  return (
    <div className="bg-teal flex flex-col h-screen justify-center items-center pt-10">

      <div className="box-content h-screen w-3/5 max-w-screen-sm rounded-3xl drop-shadow-md bg-white">
        <h1 className="text-black text-4xl font-semibold p-12">To-Do List</h1>

        <TodosForm 
          newTodo={newTodo}
          addTodo={addTodo}
          handleTodoChange={handleTodoChange}
        />

        <div>
          <button onClick={() => setShowAll(!showAll)} className="p-1 mr-4 mb-3 border-solid border-2 float-right">
            Show {showAll ? 'Completed' : 'All' }
          </button>
        </div>

        <ul className="justify-center">
          {todosToShow.map(todo => 
            <Todos 
              key={todo.id}
              todo={todo}
              removeTodo={() => removeTodo(todo.id)}
              updateTodo={() => updateTodo(todo.id)}
              completeTodo={() => completeTodo(todo.id)}
            />
          )}
        </ul>

      </div>
      <Footer />
    </div>
  )
}

export default App