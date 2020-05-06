import React from 'react';
import './PostCard.css';
import { Link } from "react-router-dom";

function PostCard({ id, title, description }) {

  return (
    <div className="PostCard" id={id}>
      <h5><Link to={`/${id}`}>{title}</Link></h5>
      <p><i>{description}</i></p>
    </div>
  );
}

export default PostCard;
