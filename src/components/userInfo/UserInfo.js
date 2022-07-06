import React from 'react'
import './UserInfo.css'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

const UserInfo = ({user}) => (
  <div className='user_container'>
      <img src={user.avatar_url} height='300' weight='130' className='p-2 avatat' alt='profile_pic' />
      <div className='smiley_wrapper'>
      <FontAwesomeIcon icon={faFaceSmile } className='smile_icon'/>
      </div>
      <div className='user_infos'>
        <h5>{user.name}</h5>
        <div className="d-grid gap-2" style={{padding:'8px 5px'}}>
            <Button variant="secondary" size="lg" style={{padding:'8px 25px'}}>
              Edit Profile
            </Button>
          </div>
        <div className='user_details'>
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
      </div>
      </div>
  </div>
)

export default UserInfo