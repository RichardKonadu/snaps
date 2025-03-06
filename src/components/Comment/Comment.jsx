import "../Comment/Comment.scss";

export default function Comment({ comment }) {
  const date = new Date(comment.timestamp);

  return (
    <div className="comment">
      <div className="comment__details">
        <p>{comment.name}</p>
        <p>{date.toLocaleDateString()}</p>
      </div>
      {comment.comment}
    </div>
  );
}
