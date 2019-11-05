import React from "react";
import PostForm from "../PostForm";
import { useParams } from "react-router-dom";

const ThreadDetail = props => {
  const { id } = useParams();
  const thread = props.findThreadById(id);
  return (
    <section>
      <h1 className="section-title section-title-light">{thread.title}</h1>
      <section className="thread">
        {thread.comments && thread.comments.length > 0 ? (
          thread.comments.map(comment => {
            return (
              <section
                key={`thread-comment-${comment.id}`}
                className="thread-panel"
              >
                <div className="thread-caption">
                  <span className="thread-author">{comment.author}</span>
                  <span className="thread-datetime">{comment.datetime}</span>
                </div>
                <div className="thread-body">{comment.message}</div>
              </section>
            );
          })
        ) : (
          <div>No comments.</div>
        )}
      </section>
      <PostForm threadId={id} addComment={props.addComment} />
    </section>
  );
};

export default ThreadDetail;
