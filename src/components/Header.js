import { useState } from 'react';
import {
 Navbar,
 NavbarBrand,
 Collapse,
 NavbarToggler,
 Nav,
 NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import dLogo from '../app/assets/img/logo.png';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
  <Navbar dark color="dark" sticky='top' expand='md'>
   <NavbarBrand className='ms-5' href='/'>
    <img src={dLogo} alt='dinera logo' className='float-start' />
    <h1 className='mt-2'>Dinera</h1>
   </NavbarBrand>
   <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
   <Collapse isOpen={menuOpen} navbar>
    <Nav className='ms-auto' navbar>
     <NavItem>
      <NavLink className='nav-link' to='/'>
       <i className='fa fa-home fa-lg' /> Home
      </NavLink>
     </NavItem>
     <NavItem>
      <NavLink className='nav-link' to='/dining'>
       <i className='fa fa-list fa-lg' /> Dining
      </NavLink>
     </NavItem>
     <NavItem>
      <NavLink className='nav-link' to='/about'>
       <i className='fa fa-info fa-lg' /> About
      </NavLink>
     </NavItem>
     <NavItem>
      <NavLink className='nav-link' to='/contact'>
       <i className='fa fa-address-card fa-lg' /> Contact
      </NavLink>
     </NavItem>
    </Nav>
    <UserLoginForm></UserLoginForm>
   </Collapse>
  </Navbar>
 );
};

export default Header;