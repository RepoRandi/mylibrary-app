const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const borrow = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BORROW_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_BORROW_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'GET_BORROW_FULFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default borrow;
