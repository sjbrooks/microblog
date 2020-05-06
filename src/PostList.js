import React from 'react';
import './PostList.css';
import PostCard from './PostCard';

function PostList({ idToPost }) {

  // TODO: anticipate using REDUX store to get all posts so we don't have to pass down posts prop later

  let postsList = Object.keys(idToPost).map(id => idToPost[id]);
 
  const postCards = postsList.map(({ title, description, key }) => (
    <PostCard 
      key={key} 
      id={key}
      title={title} 
      description={description}></PostCard>
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
