import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to={"/"}>
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
