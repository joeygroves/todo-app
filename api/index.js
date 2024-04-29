const http = require('http')

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
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(todos))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)