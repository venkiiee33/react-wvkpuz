import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={'/'}>
          Student's CRUD
        </Link>
      </nav>
    );
  }
}
export default Header;
