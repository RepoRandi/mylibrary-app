const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const book = (state = initialState, action) => {
  switch (action.type) {

    case "GET_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case "GET_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case "GET_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data
      }


    case "GET_DETAIL_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case "GET_DETAIL_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case "GET_DETAIL_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }


    case "CREATE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case "CREATE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case "CREATE_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }


    case "UPDATE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case "UPDATE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case "UPDATE_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }


    case "DELETE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case "DELETE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case "DELETE_BOOK_FULFILLED":
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

export default book;