import axios from 'axios';

export async function getLogin() {
  const res = await axios.get('http://localhost:3001/login');
  return res.data;
}

export async function userSignup(username, email, password) {
  const res = await axios.post('http://localhost:3001/signup', { username, email, password });
  return res.data;
}

export async function userLogin(username, password) {
  const res = await axios.post('http://localhost:3001/login', { username, password });
  return res.data;
}
