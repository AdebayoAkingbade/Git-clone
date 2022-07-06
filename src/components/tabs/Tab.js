import React from 'react';
import { Container, Navbar as Navbox } from 'react-bootstrap'
import { ReactComponent as Overview } from '../../assets/book-overview.svg';
import { ReactComponent as Packages } from '../../assets/packages.svg';
import { ReactComponent as Projects } from '../../assets/projects.svg';
import { ReactComponent as Repository } from '../../assets/repository.svg';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import './Tab.css'

const Tab = () => {
  return (
    <>
        <Navbox expand="lg" className="header-bg-color">
            <Container className="header-container">
                <div className="header-p-text">
                    <div className="navbar-texts-p">
                        <div className="header-text-icon">
                            <Overview color="#585858"/>
                            <p>Overview</p>
                        </div>
                        <div className="header-text-icon">
                            <Repository color="#585858"/>
                            <p>Repositories</p>
                        </div>
                        <div className="header-text-icon">
                            <Projects color="#585858"/>
                            <p>Projects</p>
                        </div>
                        <div className="header-text-icon">
                            <Packages color="#585858"/>
                            <p>Packages</p>
                        </div>
                        <div className="header-text-icon">
                            <Stars color="#585858"/>
                            <p>Stars</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbox>
    </>
  )
}

export default Tab