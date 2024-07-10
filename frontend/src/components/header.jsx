import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Gatsby App</h1>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  color: 'Black'
};


export default Header;
