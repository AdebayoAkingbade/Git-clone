import React from 'react';
import './Repo.css'

const Repo = ({repo, user}) => (
    <div className='repo_container'>
        <div>
            <div className='repo_title'>
                <i className='fa fa-book pr-1' styles={{marginRight:'100px'}}/>
                <a href='#'><span>{repo.name}</span></a>
            </div>
            <span className='desc'>{repo.description}</span>
        </div>
        <div className='d-flex ml-1' styles={{marginLeft:'10px'}}>
            <div className='subtitle'>
                <i className='fa fa-code pr-1' />
                <span>{repo.language}</span>
            </div>
            <div className='subtitle'>
                <i className='fa fa-star pr-1' />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className='subtitle'>
                <i className='fa fa-code-fork pr-1' />
                <span>{repo.forks_count}</span>
            </div>
        </div>
    </div>
)

export default Repo