const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const author = (state = initialState, action) => {
  switch (action.type) {

    // GET author
    case 'GET_AUTHOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'GET_AUTHOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'GET_AUTHOR_FULFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data
      }

    // POST author
    case 'POST_AUTHOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'POST_AUTHOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'POST_AUTHOR_FULLFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }

    // PUT author
    case 'PUT_AUTHOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'PUT_AUTHOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'PUT_AUTHOR_FULLFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }

    // DELETE author
    case 'DELETE_AUTHOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'DELETE_AUTHOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'DELETE_AUTHOR_FULLFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }
    default:
      return state
  }
}

export default author;