import React from "react";
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <ul className="Nav">
            {/* <h4>Welcome to shop</h4> */}
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/item">Item</Link>
            </li>
            
        </ul>
    )

}

export default NavBar