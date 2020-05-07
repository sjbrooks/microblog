import React, { useState } from 'react';
import './App.css';
import Routes from "./Routes";
import Nav from './Nav';
import { useHistory } from 'react-router-dom';


function App() {
  const [idToPost, setIdToPost] = useState({});
  const history = useHistory();

  const addPost = (id, post) => {
    let idToPostCopy = { ...idToPost, [id]: post };
    setIdToPost(idToPostCopy);
    history.push('/');
  }

  const updatePost = (id, updatedPost) => {
    let idToPostCopy = { ...idToPost, [id]: updatedPost }
    setIdToPost(idToPostCopy);
    history.push('/');
  }

  const deletePost = (id) => {
    let idToPostCopy = { ...idToPost };
    delete idToPostCopy[id];
    setIdToPost(idToPostCopy);
    history.push('/');
  }


  const addComment = (postId, comment) => {
    console.log(`\n\n\n The value of comment inside addComment is `, comment, '\n\n\n');
    console.log(`\n\n\n The value of comment.key inside addComment is `, comment.key, '\n\n\n');

    let idToPostCopy = {
      ...idToPost, [postId]:
      {
        ...idToPost[postId],
        comments: {
          ...idToPost[postId].comments,
          [comment.key]: comment.comment
        }
      }
    };
console.log(`\n\n\n The value of comments inside idToPostCopy in addComment is `, idToPostCopy[postId].comments, '\n\n\n');
setIdToPost(idToPostCopy);
  }

const deleteComment = (id, comment) => {
  // need to update
  // let idToPostCopy = {...idToPost, [id]: {...idToPost[id], comments: [...idToPost[id].comments, comment]} };
  // setIdToPost(idToPostCopy);
}


return (
  <div className="App">
    <Nav />
    <Routes
      idToPost={idToPost}
      addPost={addPost}
      updatePost={updatePost}
      deletePost={deletePost}
      addComment={addComment}
      deleteComment={deleteComment}
    />
  </div>
);
}

export default App;
