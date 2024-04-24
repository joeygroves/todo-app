
function App() {

  return (
    <div className="bg-teal flex flex-col h-screen justify-center items-center pt-10">

      <div className="box-content h-screen w-3/5 max-w-screen-lg rounded-3xl drop-shadow-md bg-white">
        <h1 className="text-black text-4xl font-semibold p-12">To-Do List</h1>
        <div className="pt-2 pl-12 pb-8">
          <input className="bg-teal py-4 px-4 rounded-3xl w-3/5 leading-tight focus:outline-none focus:shadow-outline" id="newTask" type="text" placeholder="Add new task" />
          <button className="bg-orange hover:bg-blue transition duration-500 text-white font-medium py-4 px-4 w-1/5 rounded-3xl focus:outline-none focus:shadow-outline" type="button">
            ADD
          </button>
        </div>

        <div className="flex justify-center">
          <div className="flex p-4 w-11/12 bg-grey">
            <input type="checkbox" className="py-4 px-2"/>
            <p className="px-2 text-md w-10/12">Pick up dry cleaning</p>
            <button className="bg-blue hover:bg-slate-400 transition duration-500 rounded-full w-7 h-7 mr-3 float-right"></button>
            <button className="bg-red hover:bg-slate-400 transition duration-500 rounded-full w-7 h-7 mr-3 float-right"></button>
          </div>
        </div>

      </div>

      <div className="pt-3 pb-8">
        <p className="text-center text-gray-500 text-xs">
          &copy; 2024 <a href="https://www.github.com/joeygroves" className="hover:text-orange transition duration-500">Joey Groves</a>. All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default App