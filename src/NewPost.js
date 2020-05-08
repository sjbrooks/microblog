import React, { useState } from "react";
import { createPostToAPI } from './actionCreators';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm';
import { useHistory } from "react-router-dom";



function NewPost() {
  const dispatch = useDispatch();
  const history = useHistory();

  function addPost(postData) {
    dispatch(createPostToAPI(postData));
    history.push('/')
  }
  // dispatch addPost
  //useSelect(store) to send idToPost down from here
  return (
    <PostForm addPost={addPost}/>
  )
}


export default NewPost

