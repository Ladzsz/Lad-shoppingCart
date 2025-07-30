import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ( { cartItems, clearCart } ) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const styles = {
    nav: {
      backgroundColor: '#4B0082',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 1rem',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'white',
      color: '#4B0082',
      border: '2px solid white',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textTransform: 'uppercase',
    }
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/shop" style={styles.link}>Shop</Link>

      <button style={styles.button}>checkout: {totalItems}</button>
      <button style={styles.button} onClick={clearCart}>Clear cart</button>

    </nav>
  );
};

export default Navbar;