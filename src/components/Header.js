import React from 'react';

const Header = ({ title, links }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;