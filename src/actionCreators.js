import axios from 'axios';
import {
  FETCH_POST,
  FETCH_POSTS,
  FETCH_COMMENTS,
  ERROR
} from './actionTypes'

const API_URL = 'http://localhost:5000/api/posts';

// helper function from Medium to convert Arrays of Objects into an Object
// https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item; 
     delete obj[item.id].id; // deletes id key from api data to remove redundancies 
     return obj
   }, {})

function fetchPosts(idToPost) {
  return {
    type: FETCH_POSTS,
    idToPost
  };
}

function handleError(error) {
  return {
    type: ERROR,
    error
  };
}

/** Retrieve & dispatch all posts data. */

export function fetchPostsFromAPI() {
  return async function thunk(dispatch) {
    try {
      let posts = await axios.get(`${API_URL}/`);
      let idToPost = arrayToObject(posts.data);
      dispatch(fetchPosts(idToPost));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

function fetchComments(idToComment) {
  return {
    type: FETCH_POST,
    idToComment
  };
}