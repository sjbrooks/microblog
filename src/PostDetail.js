import React, { useState } from 'react';
import './PostDetail.css';
import { useParams, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentsList from '../CommentsList';


function PostDetail({ idToPost, deletePost, updatePost, addComment, deleteComment }) {

  // TODO: onEdit for icons as a funciton to re-render form component at same URL
  //       onDelete should redirect to Welcome 

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
      <button className="btn btn-primary" onClick={() => setIsEditing(true)}><i className="fas fa-external-link-alt fa-lg"></i></button>
      <button className="btn btn-danger" onClick={() => deletePost(id)}> <i className="fas fa-trash-alt fa-lg"></i></button>
      <h2>{title}</h2>
      <h6><i>{description}</i></h6>
      <p>{body}</p>
      <CommentsList id={id} addComment={addComment} deleteComment={deleteComment}/>
    </div>
  );
}

export default PostDetail;
