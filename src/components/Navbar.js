import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../services/auth.service';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  NavbarText
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="primary" className="px-3" light expand="md">
        <NavbarBrand tag={Link} to="/">FitnessTrackr</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/activities">Activities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/routines">Routines</NavLink>
              </NavItem>    
                    <NavItem>
                      <NavLink tag={Link} to="/register">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/" onClick={AuthService.logout}>Logout</NavLink>
                    </NavItem>
          </Nav>
          <NavbarText>Fitness For All</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;