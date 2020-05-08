import React, { useState } from "react";
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
import { useSelector, useDispatch } from 'react-redux';


/** */


/**"dispatch to 
 * updatePost,
deletePost,
addComment,
deleteComment (in handleRemove)**/

const dispatch = useDispatch();

function Post({ idToPost }) {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const post = idToPost[id];

  if (!post) {
    return <Redirect to="/" />
  }

  if (isEditing) {
    return <PostForm idToPost={idToPost} updatePostToAPI={updatePostToAPI} />
  }

  const { title, description, body } = post;


  // TODO: we can make a function higher up that 
  // uses the postId where we have access and then pass down
  // function handleRemove() {
  //   deleteCommentFromAPI(commentId, postId);
  // }

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