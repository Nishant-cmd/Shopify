import { Outlet } from 'react-router';
import Header from './components/layout/Header';
import { useState } from 'react';

function App() {
  const [cart, addToCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, addToCart }} />
      </main>
    </>
  );
}

export default App;
