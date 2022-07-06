import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({user}) => {
  console.log(user,'user')
  return (<Navbar className='nav-wrapper'>
    <div className='nav-one'>
      <img src='https://github.com/github.png?size=460' height='37' weight='50' className='mr-3 avatar' alt='Avatar' />
      <input type='text'
       id= 'useSearch'
      placeholder='Search...' 
      className='nav_input' 
      />
      <h3 style={{ color: 'white', marginTop: '9px', fontSize: '25px' }}>{user.name}</h3>
    </div>
    <Nav>
      <div className='img_only'>
      <img src={user.avatar_url} height='37' weight='70' className='nav_image' alt='profile_pic' />
      </div>
      <NavDropdown id="nav-dropdown" className='edit_nav' style={{color: 'white'}}>
        <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Repos</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Projects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Stars</NavDropdown.Item>
      </NavDropdown>
      <a href='#' className='nav_right'>Search</a>
      <a href='#' className='nav_right'>Next page</a>
    </Nav>
  </Navbar>
  )
}

export default Header