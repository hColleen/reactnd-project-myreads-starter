import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './BurgerMenu.css'

class BurgerMenu extends React.Component {
  render () {
    return (
      <Menu>
        <Link id="home" className="menu-item" to ="/">Home</Link>
        <Link id="about" className="menu-item" to ="/search">Search</Link>
        <Link id="contact" className="menu-item" to ="/no">No Books</Link>
        <Link id="contact" className="menu-item" to ="/pole">Not With a 10' Pole Books</Link>
        <Link id="contact" className="menu-item" to ="/DNF">DNF Books</Link>
      </Menu>
    );
  }
}

export default BurgerMenu