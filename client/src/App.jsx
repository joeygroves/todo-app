import { useState, useEffect } from 'react';
import TodosForm from './components/TodosForm';
import Todos from './components/Todos';
import Footer from './components/Footer';

const App = (props) => {
  //const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const { todos } = props;

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

  return (
    <div className="bg-teal flex flex-col h-screen justify-center items-center pt-10">

      <div className="box-content h-screen w-3/5 max-w-screen-lg rounded-3xl drop-shadow-md bg-white">
        <h1 className="text-black text-4xl font-semibold p-12">To-Do List</h1>

        <TodosForm 
          newTodo={newTodo}
          addTodo={addTodo}
          handleTodoChange={handleTodoChange}
        />

        <ul className="justify-center">
          {todos.map(todo => 
            <Todos 
              key={todo.id}
              todo={todo}
              removeTodo={() => removeTodo(todo.id)}
              updateTodo={() => updateTodo(todo.id)}
            />
          )}
        </ul>

      </div>
      <Footer />
    </div>
  )
}

export default App