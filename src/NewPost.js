import { useState } from "react";
import "./NewPost.css";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);
  const author = "Nikola";
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { title, text, author };

    setIsPending(true);

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      setIsPending(false);
      console.log("new blog added");
      history("/");
    });
  };

  return (
    <div className="newPostDiv">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Post Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post Text: </label>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Post</button>}
        {isPending && <button disabled>Adding Post...</button>}
      </form>
    </div>
  );
};

export default NewPost;
