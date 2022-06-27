import React, {Fragment} from 'react'
import Header from '../components/navbar/Navbar'
import Tab from '../components/tabs/Tab'
import UserInfo from '../components/userInfo/UserInfo'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Repos from '../components/repositories/Repos'
import DarkMode from '../components/darkMode/DarkMode'

function User() {
  return (
    <div>
      <Router>
      <Fragment>
        <Header/>
        <DarkMode />
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={4} lg={3} style={{ boxShadow: '0px, 2px, 92px, 0px rgba(0, 0, 0, 0.13)' }}>
            <UserInfo />
            </Grid>
            <Grid item xs >
              <Tab />
              <Repos />
              {/* <div className='resport_container'>
                <Route exact path='/'>
                  <Resume />
                </Route>
                <Route exact path='/portfolio'>
                  <Portfolio />
                </Route>
              </div>
              <Footer /> */}
            </Grid>
          </Grid>
          </Container>
        <Routes>
          {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/> */}
        </Routes>
      </Fragment>
    </Router>
    </div>
  )
}

export default User