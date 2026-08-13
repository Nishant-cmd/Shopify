import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Shop from './components/pages/Shop';
import { useParams } from 'react-router';

const Render = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <main>
      {name === 'home' ? (
        <Home />
      ) : name === 'shop' ? (
        <Shop />
      ) : name === 'cart' ? (
        <Cart />
      ) : (
        <span></span>
      )}
    </main>
  );
};

export default Render;
