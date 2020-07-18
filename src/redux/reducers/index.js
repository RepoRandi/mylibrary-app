import {combineReducers} from 'redux';
import auth from './auth';
import book from './book';
import author from './author';
import genre from './genre';
import borrow from './borrow';

export default combineReducers({
  auth,
  book,
  author,
  genre,
  borrow,
});
