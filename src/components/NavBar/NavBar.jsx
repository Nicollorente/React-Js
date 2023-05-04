import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>

<h1> Not Co</h1>
<nav>
    <ul>
        <li>Comidas</li>
        <li>Untables</li>
        <li>Helados</li>
    </ul>

</nav>
<CartWidget />
    </header> )
}

export default NavBar