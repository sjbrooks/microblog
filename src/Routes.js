import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';


/** Routes: Component that performs client-side routing for Jobly
 *    - Used in App
 *    - Uses PostList, NewPostForm, PostDetail */
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <PostList />
      </Route>

      <Route exact path="/new">
        <NewPostForm />
      </Route>

      <Route exact path="/:id">
        <PostDetail />
      </Route>

      <Redirect to="/" />
    </Switch>
    
  );
}
export default Routes;
