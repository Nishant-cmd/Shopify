import App from '../App';
import Render from '../Render';
const routes = [
  { path: '/', element: <App /> },
  { path: '/:name', element: <Render /> },
];

export default routes;
