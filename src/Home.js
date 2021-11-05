import Post from "./Post";
import "./Home.css";
import CustomHook from "./CustomHook";

const Home = () => {
  const {
    data: post,
    isPending,
    error,
  } = CustomHook("http://localhost:8000/posts");
  return (
    <div className="homeDiv">
      {isPending && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {post && <Post post={post} title="New Posts"></Post>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
