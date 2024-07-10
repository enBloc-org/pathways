import React from 'react';
import gatsbylogo from '../image/gatsbylogo.jpeg'

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Gatsby App</h1>
      <img src = {gatsbylogo} style={{ width: 100, height: 'auto' }} />
      <input type="text" placeholder="Search..." style={searchBarStyle} />
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#ff0000',
  color: 'white'
};

const searchBarStyle = {
  padding: '5px 10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

export default Header;
