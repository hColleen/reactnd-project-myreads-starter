import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  showSettings (event) {
    event.preventDefault();
    .
    .
    .
  }

  render () {
    return (
      <Menu>
        <Link id="home" className="menu-item" to ="/">Home</Link>
        <Link id="about" className="menu-item" to ="/search">Search</Link>
        <Link id="contact" className="menu-item" to ="/no">No Books</Link>
        <Link id="contact" className="menu-item" to ="/not">Not With a 10' Pole Books</Link>
        <Link id="contact" className="menu-item" to ="/DNF">DNF Books</Link>
      </Menu>
    );
  }
}

export default Menu