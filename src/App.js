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
    let idToPostCopy = {...idToPost};
    delete idToPostCopy[id];
    setIdToPost(idToPostCopy);
    history.push('/');
  }

  return (
    <div className="App">
      <Nav />
      <Routes 
        idToPost={idToPost} 
        addPost={addPost} 
        updatePost={updatePost} 
        deletePost={deletePost} />
    </div>
  );
}

export default App;
