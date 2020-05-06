import React from 'react';
import './PostDetail.css';


function PostDetail({title, description, body}) {
// TODO: onEdit for icons as a funciton to re-render form component at same URL
//       onDelete should redirect to Welcome

  return (
    <div className="PostDetail">
      <i class="fas fa-external-link-alt"></i>
      <i class="fas fa-trash-alt"></i>
      <h2>{title}</h2>
      <h6>{description}</h6>
      <p>{body}</p>
    </div>
  );
}

export default PostDetail;
