import * as React from "react";
import { NavLink } from "react-router-dom";
import history from "../history";

const Navbar = () => {	
	return (
    <nav className="navbar navbar-light bg-light text-center custom-nav">
      <ul className="navbar-nav mx-auto">
        <span className="form-inline">
          <NavLink to="/" className="navbar-brand">오픈마켓</NavLink>
          <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
          <NavLink to="/login" className="login-link ml-sm-0 ml-md-3">로그인</NavLink>
        </span>
      </ul>
    </nav>
	)
}

export default Navbar;