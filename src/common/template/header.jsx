import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>Q</b>TOH</span>
            <span className='logo-lg'>
                <i className='fa fa-plane'></i>
                <b> QTOH</b> Tech
            </span>        
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)