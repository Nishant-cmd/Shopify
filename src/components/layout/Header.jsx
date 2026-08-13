import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import styles from '../../styles/header.module.css';
import { useState } from 'react';

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pages = ['home', 'shop', 'cart'];
  return (
    <header className={styles.header}>
      <h3>Shopify</h3>
      <nav>
        <ul role="list">
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                to={page}
                className={styles.link}
                onClick={() => setActiveIndex(index)}
                style={{
                  backgroundColor: activeIndex === index ? '#6366f1' : 'none',
                  color: activeIndex === index ? '#ffffff' : '#6b7280',
                  boxShadow: activeIndex === index ? ' 0 8px 24px' : '0',
                  textDecoration: 'none',
                  padding: '.55rem .8rem',
                  borderRadius: '10px',
                }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <Link to="Cart">
          <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
}
