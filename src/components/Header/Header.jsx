import React from "react"

function Header() {
    return (
        <nav className="container">
            <div className='logo'>
                <img src="/images/brand_logo.png" alt="Logo_Image" />
            </div>
            <ul >
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
            </ul>
            <input type="text" placeholder="Search.."></input>
            <button>Login</button>
        </nav>
    )
}

export default Header;