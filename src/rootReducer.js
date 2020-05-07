import { } from "./actionTypes"
import {
  FETCH_POST,
  FETCH_POSTS,
  // FETCH_COMMENTS,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const DEFAULT_STATE = {
  idToPost: {},
  idToComment: {}
}

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, idToPost: action.idToPost }

    // case FETCH_COMMENTS:
    //   return { ...state, idToComment: action.idToComment }

    case FETCH_POST:
      return { ...state, post: action.post }
    
    case ERROR:
      return {}
    
    case ADD_POST:
      let reformattedNewPost = { ...action.newPost };
      delete reformattedNewPost.id;
      return { ...state, idToPost: { ...state.idToPost, [action.newPost.id]: reformattedNewPost } }

    case UPDATE_POST:
      let reformattedUpdatedPost = { ...action.updatedPost };
      delete reformattedUpdatedPost.id;
      return {...state, idToPost: { ...state.idToPost, [action.updatedPost.id]: reformattedUpdatedPost } }

    case DELETE_POST:
      return {}

    case ADD_COMMENT:
      return {}

    case DELETE_COMMENT:
      return {}
    
    default:
      return state
  }
}



export default rootReducer;