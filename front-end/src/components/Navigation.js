import React from "react";
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Plant5 from './images/plant5.jpg'

const Nav = styled.nav`
  
  
 font-family: 'Chelsea Market';
 margin-top:3px;
font-size:20px;

padding-top:20px;
padding-bottom:10px;
.home{
  border: 1px solid #9fc299;
 border-radius:20px;
 padding:10px;
 background-color: #9fc299;
}
.Your-Plants{
  border: 1px solid #9fc299;
 border-radius:20px;
 padding:10px;

 margin-left:2px;
 text-align:center;
 background-color: #9fc299;
}
.login{
  border: 1px solid #9fc299;
 border-radius:20px;
 padding:10px;
 margin-left:2px;
 text-align:center;
 background-color: #9fc299;
}
.SignUp{
  border: 1px solid #9fc299;
 border-radius:20px;
 padding:10px;
 margin-left:2px;
 text-align:center;
 background-color: #9fc299;
}
`;




const Navigation = () => {
    return (
      <Nav>
      <nav>
        <span className ='home'><Link to='/'>Home</Link></span>
        <span className = 'Your-Plants'> <NavLink to='/PlantList'>Your Plants</NavLink></span>
        <span className ="login"> <NavLink to='/login'>Login</NavLink></span>
        <span className = 'SignUp'> <NavLink to='/signup'>Sign Up</NavLink></span>
      </nav>
      
      </Nav>
    );
  };
  
  export default Navigation;