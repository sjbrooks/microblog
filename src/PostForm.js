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
    key: id ? id : uuid(),
    comments: []
  }

  // QUESTION: how can we avoid having key as the object's id, as well as a key inside the object (for rendering PostCard with a correct link?)

  if (id) {
    updatePost(id, newFormData);
  } else {
    addPost(newFormData.key, newFormData);  // TODO create this to add to PostList 
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

    {/* TODO: Need to make these buttons do different things */}
      <button>Save</button>
      <button>Cancel</button>
    </form>
  </div>
);
}

export default PostForm;
