import React, { useState } from 'react';
import './App.css';
import Routes from "./Routes";
import Nav from './Nav';
import { useHistory } from 'react-router-dom';


function App() {
  const [idToPost, setIdToPost] = useState({});
  const history = useHistory();

  const addPost = async (postData) => {
    console.log(`\n\n\n The value of postData inside addPost is `, postData, '\n\n\n');
    const { title, description, body } = postData;
    let newPost = { title, description, body };

    console.log(`\n\n\n The value of newPost is `, newPost, '\n\n\n');
    console.log(`\n\n\n The value of postData.key inside addPost is `, postData.key, '\n\n\n');
    
    let idToPostCopy = { ...idToPost, [postData.key]: newPost };
    console.log(`\n\n\n The value of idToPostCopy inside addPost is `, idToPostCopy, '\n\n\n');
    await setIdToPost(idToPostCopy);

    console.log(`\n\n\n The value of idToPost inside App in addPost is `, idToPost, '\n\n\n');
    history.push('/');
  }

  const updatePost = (updatedPostData) => {
    const { title, description, body } = updatedPostData;
    let updatedPost = { title, description, body };

    console.log(`\n\n\n The value of updatedPost inside updatePost is `, updatedPost, '\n\n\n');
    let idToPostCopy = { ...idToPost, [updatedPostData.key]: updatedPost }

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
