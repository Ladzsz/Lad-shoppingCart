import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      backgroundColor: '#4B0082',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 1rem',
      fontWeight: 'bold',
    },
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/shop" style={styles.link}>Shop</Link>
    </nav>
  );
};

export default Navbar;