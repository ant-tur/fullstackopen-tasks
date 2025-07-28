import axios from 'axios';

const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(BASE_URL).then((response) => response.data);
};

const createPerson = (newPerson) => {
  return axios.post(BASE_URL, newPerson).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((response) => response.data);
};

export default { getAll, createPerson, deletePerson };
