import React from 'react';

export default function Header() {
  const styles = {
    border: '1px solid grey',
    borderRadius: '1em'
  };

  return (
    <div className="mb-3">
      <img src="images/header.jpg" alt="Company header" width="100%" />
      <nav className="navbar navbar-expand-md" style={styles}>
        <a className="navbar-brand" href="/">
          <img src="images/logo.png" alt="Company logo" width="30em" height="30em" />
        </a>
        <ul className="navbar-nav" style={{marginLeft: 'auto'}}>
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="catalogDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Catalog
            </a>
            <div className="dropdown-menu" aria-labelledby="catalogDropdown">
              <a className="dropdown-item" href="#">Villas</a>
              <a className="dropdown-item" href="#">Rooms</a>
              <a className="dropdown-item" href="#">Ecos</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
