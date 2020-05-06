import React, { useState } from 'react';
import './NewPostForm.css';
import { v4 as uuid } from "uuid";
import { useParams } from 'react-router-dom';

// TODO: for Edit funcitoning: will have to make a request and populate fields with 
// the post data upon render, based on postID

function PostForm({ addPost, idToPost, updatePost }) {

  console.log(`\n\n\n The value of idToPost inside PostForm is `, idToPost, '\n\n\n');

  let INITIAL_STATE = { title: "", description: "", body: "" };

  const { id } = useParams();
  
  // if post id exists, reset INITIAL_STATE to existing values from the post
  if (id) {
    const { title, description, body } = idToPost[id];
    INITIAL_STATE = { title, description, body };
  }

const [formData, setFormData] = useState({ ...INITIAL_STATE });  // QUESTION: heard spreading this OBJ is a good idea, what are the pros?

const handleChange = evt => {
  const { name, value } = evt.target;
  setFormData(fData => ({
    ...fData,
    [name]: value
  }));
}
const handleSubmit = evt => {
  evt.preventDefault();
  const newFormData = {
    ...formData,
    key: id ? id : uuid()
  }

  if (id) {
    console.log(`\n\n\n The value of id inside handleSubmit in PostForm is `, id, '\n\n\n');
    console.log("About to update post")
    updatePost(newFormData);
  } else {
    console.log("About to add post");
    console.log(`\n\n\n The value of newFormData is `, newFormData, '\n\n\n');
    addPost(newFormData);  // TODO create this to add to PostList 
  }

  // anticipating redux
  //   dispatch({
  //     type: "TBD",
  //     payload: newFormData
  //  })
  setFormData({ ...INITIAL_STATE });
}


return (
  <div className="NewPostForm">
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input name="title"
          value={formData.title}
          onChange={handleChange}>
        </input>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input name="description"
          value={formData.description}
          onChange={handleChange}>
        </input>
      </div>

      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea name="body"
          value={formData.body}
          onChange={handleChange}
          rows="6"
          cols="45">
        </textarea>
      </div>


      <button>Save</button>
      <button>Cancel</button>
    </form>
  </div>
);
}

export default PostForm;
