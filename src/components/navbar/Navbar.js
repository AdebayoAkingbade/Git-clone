import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  // const user = JSON.parse(localStorage.currentUser)
  // const [search, setSearch] = useState()
  // const handleChange = (e) => {
  //   setSearch(e.target.value)
  // }
  // const handleClearField = () => {
  //   setSearch('')
  // }

  // useEffect(()=>{
  //   inputSize()
  // }, [search])

  // const inputSize = ()=>{
  //   const searchButton = document.getElementById('useSearch')
  //   if (search.length < 1){
  //     searchButton.style.width = searchButton.placeholder.length+2+'ch'
  //   }else{
  //     searchButton.style.width = search.length+5+'ch'
  //   }
  // }
  return (<Navbar className='nav-wrapper'>
    <div className='nav-one'>
      <img src='https://github.com/github.png?size=460' height='37' weight='50' className='mr-3 avatar' alt='Avatar' />
      <input type='text'
       id= 'useSearch'
      placeholder='Search...' 
      // value={search} 
      // onChange={handleChange} 
      // onFocus={handleClearField} 
      className='nav_input' 
      />
      <h3 style={{ color: 'white', marginTop: '9px', fontSize: '25px' }}>Username</h3>
    </div>
    <Nav>
      <div className='img_only'>
      <img src='https://avatars.githubusercontent.com/u/87953519?v=4' height='37' weight='70' className='nav_image' alt='profile_pic' />
      </div>
      <NavDropdown id="nav-dropdown" className='edit_nav'>
        <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Repos</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Projects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Stars</NavDropdown.Item>
      </NavDropdown>
      <a href='#' className='nav_right'>Next page</a>
    </Nav>
  </Navbar>
  )
}

export default Header