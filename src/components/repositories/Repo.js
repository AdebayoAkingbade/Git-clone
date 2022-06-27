import React from 'react';
import './Repo.css'

const Repo = () => (
    <div className='repo_container'>
        <div>
            <div className='repo_title'>
                <i className='fa fa-book pr-1' />
                <a href='#'><span>Repo Title</span></a>
            </div>
            <span className='desc'>desc</span>
        </div>
        <div className='d-flex'>
            <div className='subtitle'>
                <i className='fa fa-code pr-1' />
                <span>language</span>
            </div>
            <div className='subtitle'>
                <i className='fa fa-star pr-1' />
                <span>star</span>
            </div>
            <div className='subtitle'>
                <i className='fa fa-code-fork pr-1' />
                <span>fork</span>
            </div>
        </div>
    </div>
)

export default Repo