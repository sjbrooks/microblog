import React, { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { Redirect, useParams } from "react-router-dom";
import {
  fetchPostFromAPI,
  deletePostFromAPI,
  createCommentToAPI,
  deleteCommentFromAPI,
  updatePostToAPI
} from './actionCreators';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


/** */


/**"dispatch to 
 * updatePost,
deletePost,
addComment,
deleteComment (in handleRemove)**/


function Post() {
  const { id } = useParams();
  const postId = Number(id);

  const post = useSelector(st => st.idToPost[postId], shallowEqual);
  const error = useSelector(st => st.error);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  

  /** Grab the post object from the API if we don't have it in store already */

  useEffect(function loadPostIfNotInStore() {
    async function getPost() {
      dispatch(fetchPostFromAPI(postId));
    }
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);


  /** Toggle isEditing  */

  /** Handle post editing  */
  // this is where we would invoke toggle edit

  /** Handle post deletion */

  /** Handle comment adding */

  /** Handle comment deletion */

  // MOVE THIS LOGIC CLOSER TO RETURN
  // if (isEditing) {
  //   return <PostForm idToPost={idToPost} updatePostToAPI={updatePostToAPI} />
  // }

  if (error) {
    // inspect? and then redirect to home and once home, render any error.message then clear error state
    return <h1>There was an error handling your request. Please try again later...</h1>;
  }

  // use this destructuring inside the handling functions above
  const { title, description, body } = post;


  // TODO: we can make a function higher up that 
  // uses the postId where we have access and then pass down
  // function handleRemove() {
  //   deleteCommentFromAPI(commentId, postId);
  // }

  if (!post) {
    return <h1>Loading...</h1>
   }

  return (
    <div>
      <PostDetail
        fetchPostFromAPI={fetchPostFromAPI}
        deletePostFromAPI={deletePostFromAPI}
        updatePostToAPI={updatePostToAPI}
        setIsEditing={setIsEditing} />
      <CommentsList idToPost={idToPost} postId={id} deleteCommentFromAPI={deleteCommentFromAPI} />
      <CommentForm postId={id} createCommentToAPI={createCommentToAPI} />
    </div>
  )
}

export default Post;