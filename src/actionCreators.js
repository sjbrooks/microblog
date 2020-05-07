import axios from 'axios';
import {
  FETCH_POST,
  FETCH_POSTS,
  FETCH_COMMENTS,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

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

function fetchComments(idToComment) {
  return {
    type: FETCH_COMMENTS,
    idToComment
  };
}

function fetchPost(post) {
  return {
    type: FETCH_POST,
    post
  };
}

function handleError(error) {
  return {
    type: ERROR,
    error
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

function updatePost(updatedPost) {
  return {
    type: UPDATE_POST,
    updatedPost
  }
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

// export function fetchPostCommentsFromAPI(postId) {
//   return async function thunk(dispatch) {
//     try {
//       let comments = await axios.get(`${API_URL}/${postId}/comments`);
//       let idToComment = arrayToObject(comments.data);
//       dispatch(fetchComments(idToComment));
//     } catch (error) {
//       dispatch(handleError(error.response.data));
//     }
//   }
// }

export function fetchPostFromAPI(postId) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.get(`${API_URL}/${postId}`);
      let idToComment = arrayToObject(post.data.comments)
      post.comments = idToComment;
      dispatch(fetchPost(post));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function createPostToAPI(postData) {
  return async function thunk(dispatch) {
    try {
      let newPost = await axios.post(`${API_URL}`, postData);
      dispatch(addPost(newPost));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}


