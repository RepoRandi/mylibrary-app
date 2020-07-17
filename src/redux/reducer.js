import {combineReducers} from 'redux';

const initialStateRegister = {
  form: {
    username: '',
    fullname: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'Ini Adalah Desc Untuk Register',
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Ganti Register Title',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialStateLogin = {
  form: {
    username: '',
    password: '',
  },
  info: 'Tolong Masukan Password Anda',
  isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
