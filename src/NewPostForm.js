import React, { useState } from 'react';
import './NewPostForm.css';
import { v4 as uuid } from "uuid";

// TODO: for Edit funcitoning: will have to make a request and populate fields with 
// the post data upon render, based on postID

function NewPostForm({ addPost }) {
  const INITIAL_STATE = { title: "", description: "", body: "" };
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
      key: uuid()
    }
    addPost(newFormData);  // TODO create this to add to PostList 

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

        <label htmlFor="title"></label>
        <input name="title"
          value={formData.title}
          placeholder="title"
          onChange={handleChange}></input>


        <label htmlFor="description"></label>
        <input name="description"
          value={formData.description}
          placeholder="description"
          onChange={handleChange}></input>

        <label htmlFor="body"></label>
        <input name="body"
          value={formData.body}
          placeholder="body"
          onChange={handleChange}></input>

        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}

export default NewPostForm;
