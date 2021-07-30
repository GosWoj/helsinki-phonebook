import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const create = (personObject) => {
  return axios.post(baseUrl, personObject).then((response) => {
    return response.data;
  });
};

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const personService = {
  create,
  getAll,
  deletePerson,
};

export default personService;
