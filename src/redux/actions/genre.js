import axios from 'axios';

const getGenre = (token) => {
  return {
    type: 'GET_GENRE',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + 'genre',
      headers: {
        Authorization: token,
      },
    }),
  };
};

const createGenre = (data, token) => {
  return {
    type: 'POST_GENRE',
    payload: axios({
      method: 'POST',
      url: process.env.REACT_APP_API_URL + 'genre',
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

const updateGenre = (id, data, token) => {
  return {
    type: 'PUT_GENRE',
    payload: axios({
      method: 'PUT',
      url: process.env.REACT_APP_API_URL + `genre/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

const deleteGenre = (id, token) => {
  return {
    type: 'DELETE_GENRE',
    payload: axios({
      method: 'DELETE',
      url: process.env.REACT_APP_API_URL + `genre/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export {getGenre, createGenre, updateGenre, deleteGenre};,
;