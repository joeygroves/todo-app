require('dotenv').config();
const express = require('express');
const app = express();

const Todo = require('./models/todo');

let todos = [
  ]

app.use(express.static('dist'));

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
  Todo.find({}).then(todos => {
    response.json(todos);
  })
});

app.get('/api/todos/:id', (request, response) => {
  Todo.findById(request.params.id).then(todo => {
    response.json(todo);
  })
});

app.delete('/api/todos/:id', (request, response) => {
  const id = Number(request.params.id)
  todos = todos.filter(todo => todo.id !== id)

  response.status(204).end()
});

app.post('/api/todos', (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const todo = new Todo({
    content: body.content,
    important: body.important || false,
  })

  todo.save().then(savedTodo => {
    response.json(savedTodo);
  })
});

app.use(unknownEndpoint);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})