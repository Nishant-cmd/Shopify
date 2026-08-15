import { NavLink } from 'react-router';
import styles from '../../styles/home.module.css';
import ShoppingImg from '../../assets/shopping.jpg';

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h4 className={styles.heading}>New Collection 2026</h4>
        <p className={styles.info}>Discover Products That Match Your LifeStyle</p>
        <p className={styles.description}>
          Explore electronics, fashion , jewelry and everyday essentials with a modern shopping
          experience designed for everyone.
        </p>
        <nav className={styles.nav}>
          <NavLink className={styles.shop_link} to="/shop">
            Shop Now
          </NavLink>
          <NavLink className={styles.explore_link} to="/shop">
            Explore Products
          </NavLink>
        </nav>

        <article className={styles.cards_article}>
          <div className={styles.cards}>
            <span>5K+</span>
            <p>Happy Customers</p>
          </div>
          <div className={styles.cards}>
            <span>500+</span>
            <p>Products Available</p>
          </div>
          <div className={styles.cards}>
            <span>24/7</span>
            <p>Customers Supports</p>
          </div>
        </article>
      </div>

      <div>
        <img src={ShoppingImg} className={styles.shopping_img} alt="ShoppingImage" />
      </div>
    </section>
  );
}
