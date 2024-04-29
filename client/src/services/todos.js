import axios from 'axios';
const baseUrl = 'http://localhost:3001/todos';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const complete = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
}

export default { 
  getAll: getAll, 
  create: create, 
  complete: complete 
}