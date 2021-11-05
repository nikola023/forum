import { useParams } from "react-router";
import CustomHook from "./CustomHook";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./CurrentPost.css";

const CurrentPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    })
      .then(() => {
        setIsDeleting(true);
      })
      .then(() => {
        setIsDeleting(false);
        console.log("deleting post");
        navigate("/");
      });
  };

  const {
    data: post,
    isPending,
    error,
  } = CustomHook("http://localhost:8000/posts/" + id);
  return (
    <div className="post">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <div className="homeDiv">
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <h3>Written by: {post.author}</h3>
          {!isDeleting && <button onClick={handleClick}>Delete Post</button>}
          {isDeleting && <button disabled>Deleting Post...</button>}
        </div>
      )}
    </div>
  );
};

export default CurrentPost;
