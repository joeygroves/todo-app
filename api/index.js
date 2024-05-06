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

app.get('/api/todos/:id', (request, response, next) => {
  Todo.findById(request.params.id)
    .then(todo => {
      if (todo) {
        response.json(todo)
      } else {
        response.status(404).end()
      }
  })
  .catch(error => next(error))
});

app.delete('/api/todos/:id', (request, response, next) => {
  Todo.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
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
    complete: body.complete || false,
  })

  todo.save().then(savedTodo => {
    response.json(savedTodo);
  })
});

app.put('/api/todos/:id', (request, response, next) => {
  const body = request.body

  const todo = {
    content: body.content,
    complete: body.complete,
  }

  Todo.findByIdAndUpdate(request.params.id, todo, { new: true })
    .then(updatedTodo => {
      response.json(updatedTodo)
    })
    .catch(error => next(error))
})

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

}

app.use(errorHandler);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})