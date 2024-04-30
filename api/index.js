const express = require('express')
const app = express()

let todos = [
    {
      id: 1,
      content: "Pick up dry cleaning",
      complete: false
    },
    {
      id: 2,
      content: "Do the dishes",
      complete: true
    },
    {
      id: 3,
      content: "Finish lectures",
      complete: false
    },
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/todos', (request, response) => {
  response.json(todos)
})

app.get('/api/todos/:id', (request, response) => {
  const id = Number(request.params.id);
  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    response.json(todo)
  } else {
    console.log('x')
    response.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})