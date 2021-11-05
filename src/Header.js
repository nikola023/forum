import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <h1>{<Link to="/">React Forum</Link>}</h1>
      <input type="text" placeholder="Search Forum " />
      <button>{<Link to="/add">Add Post</Link>}</button>
    </div>
  );
};

export default Header;
