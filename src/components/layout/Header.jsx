import { NavLink } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import styles from '../../styles/header.module.css';

export default function Navigation({ cart }) {
  return (
    <header className={styles.header}>
      <h3>Shopify</h3>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
          className={styles.link}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
          className={styles.link}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={styles.link}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
          to="/cart"
        >
          Cart
        </NavLink>
      </nav>
      <ShowCartValue cart={cart} />
    </header>
  );
}
function ShowCartValue({ cart }) {
  const totalProducts = cart.reduce((previous, current) => {
    return previous + current.productQuantity;
  }, 0);
  return (
    <nav>
      <NavLink to="/cart" className={styles.cartIconLink}>
        <ShoppingCart size={22} />
        {totalProducts > 0 && (
          <span className={styles.badge}>{totalProducts}</span>
        )}
      </NavLink>
    </nav>
  );
}
