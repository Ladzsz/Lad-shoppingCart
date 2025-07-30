
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ShopPage from './components/shopPage/shopPage';
import './App.css'
import { useState } from 'react';

function App() {
//setting state
  const [cartItems, setCartItems] = useState([]);

  //method to add to cart
  const addToCart = (product, quantity) => {
    if (quantity <= 0) return; // don't add 0-quantity items

    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Update quantity if already in cart
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  //method to clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flex: 1, 
      padding: '1rem',
    },
  };
  return (
  <>
    <Router>
      <div style={styles.container}>
        <Header />
        <Navbar cartItems={cartItems} clearCart={clearCart} />
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </>
  );
}

export default App
