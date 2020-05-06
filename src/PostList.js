import React from 'react';
import './PostList.css';
import PostCard from './PostCard';

function PostList() {

  // TODO: anticipate using REDUX store to get all posts so we don't have to pass down posts prop later

  const postCards = postsList.map(({ key, title, description }) => (
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
