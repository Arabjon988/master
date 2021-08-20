import React from 'react'
import './Navbar.css'
import Image from '../Image/Akdem.png'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="navbar">
            <div className="navbar__logo">
            <img src={Image} alt="logo" className="logo" />
            <h3>Akadem<span>nashr</span></h3>
            </div>
            <div className="menu"> 
            <NavLink to ="home" className="link"><h4>BOSH SAHIFA</h4></NavLink>
            <NavLink to ="book" className="link"><h4>KITOBLAR</h4></NavLink>
            <NavLink to ="bonus" className="link"><h4>AKSIYALR</h4></NavLink>
            <NavLink to ="contact" className="link"><h4>KONTAKTLAR</h4></NavLink>
            <button className="signUp">Ro'yxatdan o'tish</button>
            </div>
            </div>
        </div>
    )
}

export default Navbar
