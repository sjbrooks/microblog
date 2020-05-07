import React from 'react';
import './PostList.css';
import PostCard from './PostCard';

/** PostList: Component that renders a welcome message and a list of posts
 *    - Holds prop of idToPost
 *    - Used in Routes component
 *    - Uses PostCard component
 */

function PostList() {
  //useSelector for idToPost
  let postsList = Object.keys(idToPost).map(id => idToPost[id]);

  const postCards = postsList.map(({ title, description, postId }) => (
    <PostCard
      key={postId}
      postId={postId}
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
