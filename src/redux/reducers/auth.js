const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0],
      };
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data rejected!',
      };
    case 'REGISTER_FULLFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0],
      };

    case 'LOGOUT':
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: 'Logout succees!',
        data: {},
      };
    default:
      return state;
  }
};

export default auth;
