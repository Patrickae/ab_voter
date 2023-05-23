import axios from 'axios';

export async function getLogin() {
  const res = await axios.get('http://localhost:3001/login');
  return res.data;
}

export async function getPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}
