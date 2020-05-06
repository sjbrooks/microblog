import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { v4 as uuid } from "uuid";

function CommentsList({ idToPost, id, addComment, deleteComment }) {

  const commentComponents = idToPost[id].comments.map(c => (
    <Comment
      key={key}
      id={key}
      comment={c}
      deleteComment={deleteComment}
    />
  ));

  return (
    <div>
      <CommentForm addComment={addComment} />
      <ul>{commentComponents}</ul>
    </div>
  );
}

export default CommentsList;