import { useOutletContext, Link } from 'react-router';
import styles from '../../styles/cart.module.css';

export default function Cart() {
  const { cart, addToCart } = useOutletContext();

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.productUrl.price * item.productQuantity;
  }, 0);

  const handleQuantityChange = (e, productId) => {
    const newQty = Number(e.target.value);
    if (newQty <= 0) {
      addToCart((prev) => prev.filter((item) => item.productUrl.id !== productId));
    } else {
      addToCart((prev) =>
        prev.map((item) =>
          item.productUrl.id === productId ? { ...item, productQuantity: newQty } : item,
        ),
      );
    }
  };

  const clearCart = () => addToCart([]);

  if (cart.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>Your cart is empty.</p>
        <Link to="/shop" className={styles.continueBtn}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.cartHeader}>
          <h2 className={styles.title}>Your Cart</h2>
          <button className={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className={styles.itemList}>
          {cart.map((item) => (
            <div className={styles.card} key={item.productUrl.id}>
              <div className={styles.imgWrap}>
                <img src={item.productUrl.image} alt={item.productUrl.title} />
              </div>

              <div className={styles.info}>
                <p className={styles.itemTitle}>{item.productUrl.title}</p>
                <p className={styles.itemCategory}>{item.productUrl.category}</p>

                <div className={styles.qtyRow}>
                  <input
                    className={styles.qtyInput}
                    type="number"
                    min="0"
                    value={item.productQuantity}
                    onChange={(e) => handleQuantityChange(e, item.productUrl.id)}
                  />
                  <div className={styles.priceBlock}>
                    <span className={styles.priceBreakdown}>
                      ${item.productUrl.price.toFixed(2)} × {item.productQuantity}
                    </span>
                    <span className={styles.lineTotal}>
                      ${(item.productUrl.price * item.productQuantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className={styles.summary}>
        <h3 className={styles.summaryTitle}>Order Summary</h3>

        <div className={styles.summaryRow}>
          <span>Items</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span className={styles.free}>Free</span>
        </div>

        <div className={styles.divider} />

        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button className={styles.checkoutBtn} disabled>
          Proceed to Checkout
        </button>

        <Link to="/shop" className={styles.continueBtn}>
          Continue Shopping
        </Link>
      </aside>
    </div>
  );
}
