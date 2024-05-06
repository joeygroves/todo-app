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

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:', request.path);
  console.log('Body:', request.body);
  console.log('---');
  next();
}

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(requestLogger);

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: 'unknown endpont'
  })
}

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
});

app.get('/api/todos', (request, response) => {
  response.json(todos)
});

app.get('/api/todos/:id', (request, response) => {
  const id = Number(request.params.id);
  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    response.json(todo)
  } else {
    console.log('x')
    response.status(404).end()
  }
});

app.delete('/api/todos/:id', (request, response) => {
  const id = Number(request.params.id)
  todos = todos.filter(todo => todo.id !== id)

  response.status(204).end()
});

const generateId = () => {
  const maxId = todos.length > 0
    ? Math.max(...todos.map(t => t.id))
    : 0
  return maxId + 1;
}

app.post('/api/todos', (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const todo = {
    content: body.content,
    complete: Boolean(body.important) || false,
    id: generateId()
  }

  todos = todos.concat(todo);

  response.json(todo);
});

app.use(unknownEndpoint);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})