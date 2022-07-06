import React, {Fragment, useEffect, useState} from 'react'
import Header from '../components/navbar/Navbar'
import Tab from '../components/tabs/Tab'
import UserInfo from '../components/userInfo/UserInfo'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch, } from 'react-router-dom'
import Repos from '../components/repositories/Repos'
import { FetchRepos, FetchUser } from '../components/fetchData/FetchData'
import Loader from '../components/loader/Loader'

function User({match}) {

  const [isUser, setIsUser] = useState()
  const [isRepo, setIsRepo] = useState([])

  const matchParams = match.params.userName

  useEffect(()=>{
    userData()
    repoData()
  }, [])

  const userData = async()=>{
    const user = await FetchUser(matchParams)
    setIsUser(user)
  }

  const repoData = async()=>{
    const repo = await FetchRepos(matchParams)
    setIsRepo(repo)
  }

  return (
    <>
      {isUser ? (
        <>
        <Router>
      <Fragment>
        <Header user = {isUser}/>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={4} lg={3} style={{ boxShadow: '0px, 2px, 92px, 0px rgba(0, 0, 0, 0.13)' }}>
            <UserInfo user = {isUser}/>
            </Grid>
            <Grid item xs >
              <Tab user = {isUser} repos = {isRepo}/>
              <Repos user = {isUser} repos = {isRepo}/>
            </Grid>
          </Grid>
          </Container>
      </Fragment>
    </Router>
        </>
      ):(
        <Loader />
      )}
    </>
  )
}

export default User