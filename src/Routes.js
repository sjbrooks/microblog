import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import PostDetail from './PostDetail';


/** Routes: Component that performs client-side routing for Jobly
 *    - Used in App
 *    - Uses PostList, NewPostForm, PostDetail */

function Routes({ addPost, updatePost, idToPost, deletePost, addComment, deleteComment }) {
  return (
    <Switch>
      <Route exact path="/">
        <PostList idToPost={idToPost} />
      </Route>

      <Route exact path="/new">
        <PostForm 
          idToPost={idToPost} 
          addPost={addPost} 
          updatePost={updatePost}/>
      </Route>

      <Route exact path="/:id">
        <PostDetail 
          idToPost={idToPost} 
          updatePost={updatePost} 
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
          />
      </Route>

      <Redirect to="/" />
    </Switch>
    
  );
}
export default Routes;
