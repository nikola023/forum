import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 page</h1>
      <h1>Page not found</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default NotFoundPage;
