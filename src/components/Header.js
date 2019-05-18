import React from 'react';

export default function Header(props) {
  const styles = {
    border: '1px solid grey',
    borderRadius: '1em'
  };

  const { isAuthenticated } = props.auth;

  return (
    <div className="mb-3">
      <img src="images/header.jpg" alt="Company header" width="100%" />
      <nav className="navbar navbar-expand-md" style={styles}>
        <a className="navbar-brand" href="/">
          <img src="images/logo.png" alt="Company logo" width="30em" height="30em" />
        </a>
        <ul className="navbar-nav" style={{marginLeft: 'auto'}}>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
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
            <a className="nav-link" href="about">About Us</a>
          </li>
          {isAuthenticated() &&
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => location.replace('/dashboard')}>Dashboard</a>
            </li>
          }
          {!isAuthenticated() &&
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.auth.login}>Log In</a>
            </li>
          }
          {isAuthenticated() &&
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.auth.logout}>Log Out</a>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}
