import React from "react";

/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList({ idToPost, postId, handleRemove }) {

  const idToComment = idToPost[postId].idToComment; 
  const commentIds = Object.keys(idToComment);

  const commentComponents = commentIds.map(id => (
    <div className="Comment" key={id}>
    <button className="Comment-button btn btn-danger py-0 px-2" onClick={handleRemove}><b>x</b></button>
    <li className="Comment-list-item">{idToComment[id]}</li>
  </div>
  
  ));

  return (
    <div>
      <ul>{commentComponents}</ul>
    </div>
  );
}

export default CommentsList;