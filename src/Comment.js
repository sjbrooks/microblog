import React from "react";

function Comment({comment, deleteComment, id}) {

  function handleRemove(){
    deleteComment(id)
  }

  return (
    <div>
      <button className="btn btn-danger" onClick={handleRemove}><b>X</b></button>
      <li className="Comment">{comment}</li>
    </div>
  );
}

export default Comment;
