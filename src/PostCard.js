import React from 'react';
import './PostCard.css';
import { Link } from "react-router-dom";

function PostCard({ key, title, description }) {
  return (
    <div className="PostCard" id={key}>
      <h3><Link to={`/${key}`}>{title}</Link></h3>
      <p>{description}</p>
    </div>
  );
}

export default PostCard;
