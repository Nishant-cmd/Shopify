import { NavLink } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import styles from '../../styles/header.module.css';

export default function Navigation() {
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
      <nav>
        <NavLink to="/cart">
          <ShoppingCart />
        </NavLink>
      </nav>
    </header>
  );
}
