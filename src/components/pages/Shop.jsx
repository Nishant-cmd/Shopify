import { NavLink, useOutletContext } from 'react-router';
import styles from '../../styles/shop.module.css';
import useAllData from '../../services/products';
import { Outlet } from 'react-router';

export default function Shop() {
  const { data, loading, error } = useAllData();
  const { addToCart } = useOutletContext();

  if (loading) {
    return <div>Loading....</div>;
  } else if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className={styles.main}>
      <Categories />
      <section className={styles.section}>
        <CategoryTitle />
        <main
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
            gap: '1.5rem',
          }}
        >
          <Outlet context={{ data, addToCart }} />
        </main>
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
          to="all"
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
          to="electronics"
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
          to="mens"
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
          to="women"
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
          to="jewelery"
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
      <h3>All Products</h3>
      <p>20 products</p>
    </header>
  );
}
