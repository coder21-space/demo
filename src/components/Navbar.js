import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "blue",
                    };
                  }}
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }}
                className="nav-link"
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </li>
              <li className="nav-item">
                <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }} className="nav-link" to="/About">
                  About us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                  className="nav-link"
                  to="/Invoice/:category/:id"
                >
                  Invoice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                  className="nav-link"
                  to="/Datafun"
                >
                  Data
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                  className="nav-link"
                  to="/Contact"
                >
                Contact us
                </NavLink>
              </li>
            </ul>
            <li className="nav-item">
              <NavLink to="/login">
                <button className="btn btn-primary">Login </button>
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
