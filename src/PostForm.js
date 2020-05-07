import React, { useState } from 'react';
import './PostForm.css';
import { v4 as uuid } from "uuid";
import { useParams, Link } from 'react-router-dom';



function PostForm({ addPost, idToPost, updatePost }) {

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
      comments: {}
    }

    // QUESTION: how can we avoid having key as the object's id, as well as a key inside the object (for rendering PostCard with a correct link?)

    if (id) {
      updatePost(id, newFormData);
    } else {
      addPost(newFormData.key, newFormData); 
    }

    // anticipating redux
    //   dispatch({
    //     type: "TBD",
    //     payload: newFormData
    //  })
    setFormData({ ...INITIAL_STATE });
  }


  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="PostForm-label" htmlFor="title">Title</label>
          <input className="PostForm-input" name="title"
            value={formData.title}
            onChange={handleChange}
            cols="45">
          </input>
        </div>

        <div className="form-group">
          <label className="PostForm-label" htmlFor="description">Description</label>
          <input className="PostForm-input" name="description"
            value={formData.description}
            onChange={handleChange}
            cols="45">
          </input>
        </div>

        <div className="form-group">
          <label className="PostForm-label-body" htmlFor="body">Body</label>
          <textarea name="body"
            value={formData.body}
            onChange={handleChange}
            rows="6"
            cols="45">
          </textarea>
        </div>
        <button type="submit" className="Postform-button btn btn-primary">Save</button>
        <Link to='/'><button className="Postform-button btn btn-danger">Cancel</button></Link>
      </form>
    </div>
  );
}

export default PostForm;
