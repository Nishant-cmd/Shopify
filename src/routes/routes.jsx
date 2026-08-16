import App from '../App';
import Home from '../components/pages/Home';
import Shop from '../components/pages/Shop';
import Cart from '../components/pages/Cart';
import Products from '../components/pages/Products';
import Electronics_Product from '../components/pages/Electronics_Product';
import Men_Product from '../components/pages/Men_Product';
import Women_Product from '../components/pages/Women_Product';
import Jewelery_Product from '../components/pages/Jewelery_Product';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/shop',
        element: <Shop />,
        children: [
          { index: true, element: <Products /> },
          { path: 'all', element: <Products /> },
          { path: 'electronics', element: <Electronics_Product /> },
          { path: 'mens', element: <Men_Product /> },
          { path: 'women', element: <Women_Product /> },
          { path: 'jewelery', element: <Jewelery_Product /> },
        ],
      },
      { path: '/cart', element: <Cart /> },
    ],
  },
];

export default routes;
