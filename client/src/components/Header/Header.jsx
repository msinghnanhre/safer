import './Header.scss'

import { Link } from 'react-router-dom'


import React from 'react'
import logo from "../../assets/logo.svg"
import "./Header.scss"

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src={logo}
                alt="site logo"
            />
            <button className="header__search">Search Now</button>
        </div>
    )
}

export default Header
