import React from 'react'
import earth from '../images/earth.png'

function Navbar() {
    return (
        <nav className="Navbar">
            <img src={earth} alt="Earth logo" />
            <text>my travel journal.</text>
        </nav>
    )
}

export default Navbar
