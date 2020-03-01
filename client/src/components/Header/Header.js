import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export function Header() {
  const { params: { subpage } } = useRouteMatch();
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
  console.log('subpage', subpage);
  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
      <li>
        <Link style={!subpage ? activeStyle : notActiveStyle} to="/">Home</Link>
      </li>
      <li>
        {subpage !== 'about' ? <Link style={notActiveStyle} to="/about">Other page</Link> : <>Other page</>}
      </li>
      <li>
        <Link style={notActiveStyle} to="/contact">Other page 2</Link>
      </li>
    </ul>
  );
}

export default Header;
