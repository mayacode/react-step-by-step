import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Other page</Link>
      </li>
      <li>
        <Link to="/contact">Other page 2</Link>
      </li>
    </ul>
  );
}

export default Header;
