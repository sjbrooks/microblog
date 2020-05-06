import React, {useState} from 'react';
import './App.css';
import Routes from "./Routes";
import Nav from './Nav';

function App() {
  const [postsList, setPostsList] = useState([]);

const addPost = () => {}

const updatePost = () =>{}


  return (
    <div className="App">
      <Nav />
      <Routes postsList={postsList} />
    </div>
  );
}

export default App;
