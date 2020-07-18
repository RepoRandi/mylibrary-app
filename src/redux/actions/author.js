import axios from 'axios';

const getAuthor = (token) => {
  return {
    type: 'GET_AUTHOR',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + 'author',
      headers: {
        Authorization: token,
      },
    }),
  };
};

const createAuthor = (data, token) => {
  return {
    type: 'POST_AUTHOR',
    payload: axios({
      method: 'POST',
      url: process.env.REACT_APP_API_URL + 'author/',
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

const updateAuthor = (id, data, token) => {
  return {
    type: 'PUT_AUTHOR',
    payload: axios({
      method: 'PUT',
      url: process.env.REACT_APP_API_URL + `author/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

const deleteAuthor = (id, token) => {
  return {
    type: 'DELETE_AUTHOR',
    payload: axios({
      method: 'DELETE',
      url: process.env.REACT_APP_API_URL + `author/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export {getAuthor, createAuthor, updateAuthor, deleteAuthor};,
;