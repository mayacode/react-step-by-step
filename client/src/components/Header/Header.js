import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const activeStyle = {
    textDecoration: 'none',
    color: '#000000',
    fontWeight: 'normal',
    cursor: 'auto'
  };
  const notActiveStyle = {
    textDecoration: 'underline',
    color: 'brown',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
      <li>
        <NavLink style={notActiveStyle} activeStyle={activeStyle} exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink style={notActiveStyle} activeStyle={activeStyle} to="/about">Other page</NavLink>
      </li>
      <li>
        <NavLink style={notActiveStyle} activeStyle={activeStyle} to="/contact">Other page 2</NavLink>
      </li>
    </ul>
  );
}

export default Header;
