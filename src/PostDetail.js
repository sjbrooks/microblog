import React, { useState } from 'react';
import './PostDetail.css';
import { useParams, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';


function PostDetail({ idToPost, deletePost, updatePost, addComment, deleteComment }) {

  console.log(`\n\n\n The value of idToPost inside PostDetail is `, idToPost, '\n\n\n');

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const post = idToPost[id];

  if (!post) {
    console.log("You are being redirected to home from PostDetail")
    return <Redirect to="/" />
  }

  if (isEditing) {
    return <PostForm idToPost={idToPost} updatePost={updatePost}/>
  }

  const {title, description, body} = post;

  return (
    <div className="PostDetail">
      <button className="PostDetail-button btn btn-primary py-0 px-1" onClick={() => setIsEditing(true)}><i className="fas fa-external-link-alt fa-sm"></i></button>
      <button className="PostDetail-button btn btn-danger py-0 px-1" onClick={() => deletePost(id)}> <i className="fas fa-trash-alt fa-sm"></i></button>
      <h2>{title}</h2>
      <h6><i>{description}</i></h6>
      <p className="PostDetail-body border-bottom">{body}</p>
      <CommentsList idToPost={idToPost} postId={id} deleteComment={deleteComment}/>
      <CommentForm postId={id} addComment={addComment}/>
    </div>
  );
}

export default PostDetail;
