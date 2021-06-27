import React, { useState } from 'react';
import { Link } from "react-router-dom";
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


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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
          </Nav>
          <NavbarText>Fitness For All</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;