import App from '../App';
import Home from '../components/pages/Home';
import Shop from '../components/pages/Shop';
import Cart from '../components/pages/Cart';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
];

export default routes;
