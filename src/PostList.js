import React, { useState } from 'react';
import './PostList.css';
import PostCard from './PostCard';

function PostList({ posts }) {
  const [postsList, setPostsList] = useState([]]);

  // TODO: anticipate using REDUX store to get all posts so we don't have to pass down posts prop later

  const postCards = posts.map(({ key, title, description }) => (
    <PostCard key={key} title={title} description={description}></PostCard>
  ))

  return (
    <div className="PostList">
      <h3>＿φ(°-°=)</h3>
      <p>Welcome to Microblog!</p>
      <div>
        {postCards}
      </div>
    </div>
  );
}

export default PostList;
