import { useState, useEffect } from 'react';
import TodosForm from './components/TodosForm';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    event.preventDefault();
    console.log('button clicked', event.target);
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

        <div className="flex justify-center">
          <div className="flex p-4 w-11/12 bg-grey rounded-sm">
            <input type="checkbox" className="py-4 px-2" />
            <p className="px-2 text-md w-10/12">Pick up dry cleaning</p>
            <button className="bg-blue hover:bg-slate-400 transition duration-500 rounded-full w-7 h-7 mr-3 float-right"></button>
            <button className="bg-red hover:bg-slate-400 transition duration-500 rounded-full w-7 h-7 mr-3 float-right"></button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default App