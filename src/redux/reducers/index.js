import { combineReducers } from "redux";
import postsReducers from "./posts";
import modal from './modal'

export default combineReducers({
  posts:postsReducers,
  modal
});
