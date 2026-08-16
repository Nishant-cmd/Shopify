import { useState } from 'react';
import styles from '../../styles/product_info.module.css';

export default function ProductInfo({ productDetails }) {
  const [addCart, setAddCart] = useState(false);

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productDetails.image} alt="ProudctImg" />
      </div>
      <div className={styles.product_info}>
        <p className={styles.category}>{productDetails.category}</p>
        <p className={styles.details}>{productDetails.title}</p>
        <div className={styles.inputDiv}>
          <span>{'$' + productDetails.price}</span>
          {addCart ? (
            <Input setAddCart={setAddCart} />
          ) : (
            <button className={styles.addCartButton} type="button" onClick={() => setAddCart(true)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({ setAddCart }) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    if (Number(quantity) >= 1) {
      setQuantity(event.target.value);
    } else {
      setAddCart(false);
    }
  };
  return <input className={styles.input} type="number" value={quantity} onChange={handleChange} />;
}
