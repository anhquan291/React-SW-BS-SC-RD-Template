import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt='Logo'
      style={{ resize: 'contain', height: 100 }}
      src='/static/images/logo.png'
      {...props}
    />
  );
};

export default Logo;
