import React from "react";
import Comment from "./Comment";

function CommentsList({ idToPost, postId, deleteComment }) {

  const commentComponents = idToPost[postId].comments.map(({comment, key}) => (
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