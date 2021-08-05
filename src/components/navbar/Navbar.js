import React from "react";
import { Link } from "gatsby";

/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
 */
import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">
        Home
      </Link>
      {/* <a href='/' className='navbar-item'>
        Home
      </a> */}

      <Link to="/votes" className="navbar-item">
        Votes
      </Link>

      <Link to="/user" className="navbar-item">
        User
      </Link>

      <Link to="/about" className="navbar-item">
        About
      </Link>
    </section>
  );
}

export default Navbar;
