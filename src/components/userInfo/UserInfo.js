import React from 'react'
import './UserInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

const UserInfo = () => (
  <div className='user_container'>
      <img src='https://avatars.githubusercontent.com/u/87953519?v=4' height='300' weight='130' className='p-2 avatat' alt='profile_pic' />
      <div className='smiley_wrapper'>
      <FontAwesomeIcon icon={faFaceSmile } className='smile_icon'/>
      </div>
      <div className='user_infos'>
        <h5>Username</h5>
        <div className='user_details'>
        <div className='user_info'>
          <i className='fa fa-map-marker pr-1' />
          <span>Location ·</span>
        </div>
        <div className='user_info'>
          <i className='fa fa-globe pr-1' />
          <span>blog url ·</span>
        </div>
        <div className='user_info'>
          <i className='fa fa-envelope pr-1' />
          <span>email ·</span>
        </div>
        <div className='user_info'>
          <i className='fa fa-twitter pr-1' />
          <span>Twitter ·</span>
        </div>
        <div className='user_info'>
          <i className='fa fa-group pr-1' />
          <span>Followers ·</span>
        </div>
        <div className='user_info'>
          <i className='fa fa-heart pr-1' />
          <span>Following ·</span>
        </div>
      </div>
      </div>
  </div>
)

export default UserInfo