import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {post.map((post) => (
        <div className="post" key={post.id}>
          <Link className="postLink" to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <h3>{post.author}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
