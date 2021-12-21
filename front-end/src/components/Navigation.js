import React from "react";
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <NavLink to='/plant'>Plant</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </nav>
    );
  };
  
  export default Navigation;