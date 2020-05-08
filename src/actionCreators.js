import axios from 'axios';
import {
  FETCH_POST,
  FETCH_POSTS,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  // FETCH_COMMENTS,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const API_URL_POST = 'http://localhost:5000/api/posts';
const API_URL_COMMENT = 'http://localhost:5000/api/comments';

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

// function fetchPostComments(idToComment) {
//   return {
//     type: FETCH_COMMENTS,
//     idToComment
//   };
// }

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


function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

function getComments(newComment) {
  return {
    type: ADD_COMMENT,
    newComment
  }
}


/** Retrieve & dispatch all posts data. */

export function fetchPostsFromAPI() {
  return async function thunk(dispatch) {
    try {
      let posts = await axios.get(`${API_URL_POST}/`);
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
//       let comments = await axios.get(`${API_URL_POST}/${postId}/comments`);
//       let idToComment = arrayToObject(comments.data);
//       dispatch(fetchPostComments(idToComment));
//     } catch (error) {
//       dispatch(handleError(error.response.data));
//     }
//   }
// }

export function fetchPostFromAPI(postId) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.get(`${API_URL_POST}/${postId}`);
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
      let newPost = await axios.post(`${API_URL_POST}`, postData);
      dispatch(addPost(newPost));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}

export function updatePostToAPI(postData) {
  return async function thunk(dispatch) {
    try {
      let updatedPost = await axios.put(`${API_URL_POST}`, postData);
      dispatch(updatePost(updatedPost));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}

export function deletePostFromAPI(id) {
  return async function thunk(dispatch) {
    try {
      await axios.delete(`${API_URL_POST}/${id}`);
      dispatch(deletePost(id));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function createCommentToAPI(commentData) {
  return async function thunk(dispatch) {
    try {
      let newComment = await axios.post(`${API_URL_COMMENT}`, commentData);
      dispatch(getComments(newComment));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}