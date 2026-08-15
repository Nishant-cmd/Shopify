import { NavLink } from 'react-router';
import { SquareArrowUpRight } from 'lucide-react';
import styles from '../../styles/home.module.css';
import ShoppingImg from '../../assets/shopping.jpg';

export default function Home() {
  return (
    <>
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
      <section className={styles.categories}>
        <h5>Categories</h5>
        <p>Browse Popular Categories</p>
        <nav className={styles.categories_link}>
          <NavLink className={styles.link} to="/shop">
            <div>
              <p>Electronics</p>
              <p>Latest gadgets and smart devices.</p>
            </div>
            <div className={styles.icon_div}>
              <SquareArrowUpRight className={styles.icon} />
            </div>
          </NavLink>

          <NavLink className={styles.link} to="/shop">
            <div>
              <p>Men's Fashion</p>
              <p>Modern outfits for everyday style.</p>
            </div>

            <div className={styles.icon_div}>
              <SquareArrowUpRight className={styles.icon} />
            </div>
          </NavLink>

          <NavLink className={styles.link} to="/shop">
            <div>
              <p>Women's Fashion</p>
              <p>Elegant and trendy collections.</p>
            </div>
            <div className={styles.icon_div}>
              <SquareArrowUpRight className={styles.icon} />
            </div>
          </NavLink>

          <NavLink className={styles.link} to="/shop">
            <div>
              <p>Jewelry</p>
              <p>Luxury accessories and essentials.</p>
            </div>

            <div className={styles.icon_div}>
              <SquareArrowUpRight className={styles.icon} />
            </div>
          </NavLink>
        </nav>
      </section>
    </>
  );
}
