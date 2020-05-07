import React, { useState } from 'react';
import './NewPostForm.css';
import { v4 as uuid } from "uuid";


function CommentForm({ addComment }) {

  let INITIAL_STATE = ({ comment: "" });

const [formData, setFormData] = useState({ ...INITIAL_STATE });  

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

  addComment(newFormData);

  setFormData({ ...INITIAL_STATE });
}


return (
  <div className="NewPostForm">
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <input name="comment"
          value={formData.comment}
          onChange={handleChange}>
        </input>
      </div>

      <button className="btn btn-primary">add</button>
    </form>
  </div>
);
}

export default CommentForm;
