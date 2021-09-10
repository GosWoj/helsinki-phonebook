import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

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

const updateNumber = (id, personObject) => {
  return axios
    .put(`${baseUrl}/${id}`, personObject)
    .then((response) => response.data);
};

const personService = {
  create,
  getAll,
  deletePerson,
  updateNumber,
};

export default personService;
