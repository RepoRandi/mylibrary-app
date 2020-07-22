import axios from 'axios';

const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      // process.env.REACT_APP_API_URL + 'auth/login',
      url: 'http://192.168.1.4:3000/auth/login',
      data: {
        username: data.username,
        password: data.password,
      },
    }),
  };
};

const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'POST',
      // process.env.REACT_APP_API_URL + 'auth/register',
      url: 'http://192.168.1.4:3000/auth/register',
      data: {
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        role: data.role,
      },
    }),
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export {login, register, logout};
