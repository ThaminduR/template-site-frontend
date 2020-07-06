import React, { useState, useEffect } from 'react'
import { SITE_NAME } from '../../constants/constants';
import './Navbar.css';

function NavigationBar(props) {

    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 150) {
            return setHeader("navbarr-1")
        } else if (window.scrollY > 150) {
            return setHeader("navbar-2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <nav className={"navbar navbar-expand-md navbar-dark fixed-top " + header}>
            <div className='brand'><a className="navbar-brand" href="/">{SITE_NAME}</a></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-2">
                    <li className="nav-item active mr-2">
                        <button type="button" className="btn btn-outline-light"><a href='/'>Login</a></button>
                    </li>
                    <li className="nav-item active">
                        <button type="button" className="btn btn-outline-light"><a href='/register'>Sign Up</a></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar