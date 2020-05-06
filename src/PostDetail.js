import React, { useState } from 'react';
import './PostDetail.css';
import { useParams, Redirect } from 'react-router-dom';
import PostForm from './PostForm';


function PostDetail({ idToPost, deletePost, updatePost }) {

  // TODO: onEdit for icons as a funciton to re-render form component at same URL
  //       onDelete should redirect to Welcome 

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const post = idToPost[id];

  console.log(`\n\n\n The value of id inside PostDetail is `, id, '\n\n\n');
  console.log(`\n\n\n The value of post inside PostDetail is `, post, '\n\n\n');

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
      <i className="fas fa-trash-alt fa-lg" onClick={() => deletePost(id)}></i>
      <h2>{title}</h2>
      <h6><i>{description}</i></h6>
      <p>{body}</p>
    </div>
  );
}

export default PostDetail;
