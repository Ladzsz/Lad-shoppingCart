import React, { useEffect, useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  //setting quanitiy states
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(prev - 1, 0));

  //styles
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      width: '300px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <img src={product.image} alt={product.title} style={{
        height: '150px',
        objectFit: 'contain',
        marginBottom: '0.5rem',
      }} />
      <div style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      }}>{product.title}</div>
      <div style={{
        color: '#2E0052',
        fontWeight: 'bold',
      }}>${product.price}</div>

      {/* input returns */}
      <div>
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(0, parseInt(e.target.value) || 0))
          }
          style={{ width: '50px', textAlign: 'center', margin: '0 0.5rem' }}
        />
        <button onClick={increment}>+</button>
      </div>

      <button style={{ marginTop: '1rem' }} onClick={() => addToCart(product, quantity)}>Add to cart</button>
    </div>
  );
};

const ShopPage = ({ addToCart }) => {
  //setting states for api and loading
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //calling the false products and setting them to the state
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=15')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  //loading
  if (loading) return <p>Loading products...</p>;

  //mapping out the cards
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ShopPage;