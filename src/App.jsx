import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ShopPage from './components/shopPage/shopPage';

import './App.css'

function App() {

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
        <Navbar />
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </>
  );
}

export default App
