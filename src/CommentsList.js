import React from "react";
import Comment from "./Comment";

function CommentsList({ idToPost, id, deleteComment }) {

  const commentComponents = idToPost[id].comments.map(({comment, key}) => (
    <Comment
      key={key}
      id={key}
      comment={comment}
      deleteComment={deleteComment}
    />
  ));

  return (
    <div>
      <ul>{commentComponents}</ul>
    </div>
  );
}

export default CommentsList;