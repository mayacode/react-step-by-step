import React from 'react';

export function Header() {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
      <li>
        Home
      </li>
      <li>
        Other page
      </li>
      <li>
        Other page 2
      </li>
    </ul>
  );
}

export default Header;
