import axios from 'axios';

const getBorrow = () => {
  return {
    type: 'GET_BORROW',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/' + 'borrow/1',
    }),
  };
};

export {getBorrow};
