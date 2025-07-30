import React from 'react';
import shoppingCartGif from '../../assets/shopping-cart.gif';


const Homepage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    },
    header: {
      padding: '2rem',
      textAlign: 'center',
    },
    title: {
      fontSize: '2rem',
      color: '#4B0082',
      margin: 0,
    },
    paragraph: {
      fontSize: '1.1rem',
      color: 'black',
      maxWidth: '600px',
      margin: '1rem auto',
    },
    gif: {
      width: '400px',
      height: 'auto',
      marginTop: '1.5rem',
    },
  };

  return (
    <>
    <div style={styles.container}>
      <main style={styles.header}>
        <h1 style={styles.title}>Welcome to Shopping made Lad!</h1>
      </main>

      <p style={styles.paragraph}>
        Welcome to Lad Shopping Cart — your simple and hassle-free way to browse, select, and manage items before checkout.
      </p>

      <img 
        src={shoppingCartGif} 
        alt="Animated shopping cart" 
        style={styles.gif}
      />
    </div>
    </>
  );
};

export default Homepage;
