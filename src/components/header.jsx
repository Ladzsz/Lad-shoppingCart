import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Lad Shopping Cart</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4B0082',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
  },
};

export default Header;