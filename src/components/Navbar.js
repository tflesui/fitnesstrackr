import React, { useState } from 'react';
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
        <NavbarBrand href="/">FitnessTrackr</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/activities/">Activities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/routines/">Routines</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register/">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login/">Login</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Track More</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;