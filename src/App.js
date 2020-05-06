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
    console.log(`\n\n\n The value of id inside updatePost is `, id, '\n\n\n');
    console.log(`\n\n\n The value of updatedPost inside updatePost is `, updatedPost, '\n\n\n');
    let idToPostCopy = { ...idToPost, [id]: updatedPost }
    console.log(`\n\n\n The value of idToPostCopy inside updatePost is `, idToPostCopy, '\n\n\n');
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
