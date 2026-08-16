import { NavLink } from 'react-router';
import styles from '../../styles/shop.module.css';

export default function Shop() {
  return (
    <main className={styles.main}>
      <Categories />
      <section className={styles.section}>
        <CategoryTitle />
        <ShowProducts />
      </section>
    </main>
  );
}

function Categories() {
  return (
    <aside className={styles.aside}>
      <h4>Categories</h4>
      <nav className={styles.nav}>
        <NavLink
          to="/shop/all"
          className={styles.link}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
        >
          All Products
        </NavLink>
        <NavLink
          to="/shop/electronics"
          className={styles.link}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
        >
          Electronics
        </NavLink>
        <NavLink
          to="/shop/mens"
          className={styles.link}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
        >
          Men's Clothing
        </NavLink>
        <NavLink
          to="/shop/women"
          className={styles.link}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
        >
          Women's Clothing
        </NavLink>
        <NavLink
          to="/shop/jewelery"
          className={styles.link}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'var(--accent)' : '',
              color: isActive ? 'var(--bg-main)' : '',
            };
          }}
        >
          Jewelery
        </NavLink>
      </nav>
    </aside>
  );
}
function CategoryTitle() {
  return (
    <header className={styles.header}>
      <h3>Men's Clothing</h3>
      <p>4 Products</p>
    </header>
  );
}

function ShowProducts() {
  return <div>This will show product details</div>;
}
