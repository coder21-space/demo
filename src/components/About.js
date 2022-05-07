import "bootstrap/dist/css/bootstrap.css";
import { Link, Outlet } from "react-router-dom";
function About() {
  return (
    <>
      
        <h1 className="text-center">About page</h1>
        <nav>
        <Link to="Company">company</Link>
        <Link to="Business">Business</Link>
        <Link to="Other">Other</Link>
        <Outlet />
        </nav>
    </>
  );
}

export default About;
