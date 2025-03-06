import "../Comment/Comment.scss";

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <h3>3 comments</h3>
      <div className="comment__details">
        <p>{comment.name}</p>
        <p>{comment.timestamp}</p>
      </div>
      {comment.comment}
    </div>
  );
}
