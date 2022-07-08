import React, { useState } from 'react'
import './UserInfo.css'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import axios from 'axios'
import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as CompanyName } from "../../assets/companyname.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Website } from "../../assets/website.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

const UserInfo = ({ user }) => {
  const [edit, setEdit] = useState(false)

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setEdit({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.reload(false)
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(`https://api.github.com/${user.id}`, user);
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = ()=>{
    setEdit()
  }
  return(
  <div className='user_container'>
    <img src={user.avatar_url} height='300' weight='130' className='p-2 avatat' alt='profile_pic' />
    <div className='smiley_wrapper'>
      <FontAwesomeIcon icon={faFaceSmile} className='smile_icon' />
    </div>
    <div className='user_infos'>
      <h5>{user.name}</h5>
      {user.bio && (
        <div className='user_info'>
          <i className='fa fa-bio pr-1' />
          <span>{user.bio} </span>
        </div>
      )}
      {edit && (
        <form onSubmit= {handleSubmit} className='form_style'>
        <input
              name="email"
              type="email"
              value={user.email}
              placeholder={"Your email"}
              handleInput={handleInput}
            />
            <br />
            <input
              name="name"
              type="text"
              placeholder={"Your name"}
              handleInput={handleInput}
            />
            <br />
            <input
              name="location"
              type="text"
              // value={user.location}
              placeholder={"Your location"}
              handleInput={handleInput}
            />
            <br />
            <input
              name="twitter"
              type="twitter"
              // value={user.location}
              placeholder={"Your twitter handle"}
              handleInput={handleInput}
            />
            <br />
            <button onClick={handleSubmit}>Save</button>
          </form>
      )}
      <div className="d-grid gap-2" style={{ padding: '8px 5px' }}>
        <Button variant="secondary" size="lg" style={{ padding: '8px 25px' }} onClick={()=>setEdit(true)}>
          Edit Profile
        </Button>
      </div>
      <div className="profile-user-info">
        {user.followers && user.following && (
          <div className="profile-sidenar-info profile-sidenar-info-follow">
            <div className='user_info'>
              <i className='fa fa-group pr-1' style={{ marginTop: '-15px' }} />
              <p>{user.followers} followers</p>
            </div>
            <div className='user_info'>
              <i className='fa fa-heart pr-1' style={{ marginTop: '-15px' }} />
              <p> . {user.following} following </p>
            </div>
          </div>
        )}
        {user.company && (
          <div className="profile-sidenar-info">
            <CompanyName color="#8b949e" />
            <p>{user.company}</p>
          </div>
        )}
        {user.location && (
          <div className="profile-sidenar-info">
            <Location color="#8b949e" />
            <p>{user.location}</p>
          </div>
        )}
        {user.email && (
          <div className="profile-sidenar-info profile-sidenar-info-link">
            <Email color="#8b949e" />
            <p>{user.email}</p>
          </div>
        )}
        {user.blog && (
          <div className="profile-sidenar-info profile-sidenar-info-link">
            <Website color="#8b949e" />
            <Link to={user.blog}>{user.blog}</Link>
          </div>
        )}
        {user.twitter_username && (
          <div className="profile-sidenar-info profile-sidenar-info-link">
            <Twitter color="#8b949e" />
            <p>@{user.twitter_username}</p>
          </div>
        )}
      </div>
      {/* <div className='user_details'>
          {user.location && (
            <div className='user_info'>
            <i className='fa fa-map-marker pr-1' />
            <span>{user.location} ·</span>
          </div>
          )}
          {user.blog && (
            <div className='user_info'>
            <i className='fa fa-globe pr-1' />
            <span>{user.blog} ·</span>
          </div>
          )}
          {user.bio && (
            <div className='user_info'>
            <i className='fa fa-bio pr-1' />
            <span>{user.bio} </span>
          </div>
          )}
          {user.email && (
            <div className='user_info'>
            <i className='fa fa-envelope pr-1' />
            <span>{user.email} </span>
          </div>
          )}
          {user.twitter_username && (
            <div className='user_info'>
            <i className='fa fa-twitter pr-1' />
            <span>@{user.twitter_username} ·</span>
          </div>
          )}
          {user.followers && (
            <div className='user_info'>
            <i className='fa fa-group pr-1' />
            <span>{user.followers} follower·</span>
          </div>
          )}
          {user.following && (
        <div className='user_info'>
          <i className='fa fa-heart pr-1' />
          <span>{user.following} following·</span>
        </div>
          )}
      </div> */}
    </div>
  </div>
)
    }
export default UserInfo