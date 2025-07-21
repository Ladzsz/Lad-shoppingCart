import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; {new Date().getFullYear()} Lad Shopping Cart. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#4B0082',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;