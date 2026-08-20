import { Outlet } from 'react-router';
import Header from './components/layout/Header';
import { useState } from 'react';

function App() {
  const [cart, addCart] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ cart, addCart }} />
      </main>
    </>
  );
}

export default App;
