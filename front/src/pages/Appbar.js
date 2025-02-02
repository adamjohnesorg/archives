import { Link } from "react-router-dom";

const Appbar = () => {

  return (
    <div className="wrapper">
      <Link to="/Home">Home</Link>
      <Link to="/PageTwo">PageTwo</Link>
    </div>
  );
};

export default Appbar