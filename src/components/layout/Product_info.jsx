import { useState } from 'react';
import styles from '../../styles/product_info.module.css';

export default function ProductInfo({ productDetails, addToCart }) {
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

          <Input
            addCart={addCart}
            setAddCart={setAddCart}
            productDetails={productDetails}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
}

function Input({ addCart, setAddCart, productDetails, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    const quantity = Number(event.target.value);

    if (quantity > 0) {
      addProduct(productDetails, quantity);
      setQuantity(quantity);
      setAddCart(true);
    } else {
      removeFromCart(productDetails.id);
      setAddCart(false);
    }
  };

  const addProduct = (productDetails, quantity) => {
    addToCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (product) => product.productUrl.id === productDetails.id,
      );

      // Product already exists
      if (productIndex !== -1) {
        return prevCart.map((product, index) =>
          index === productIndex
            ? {
                ...product,
                productQuantity: quantity,
              }
            : product,
        );
      }

      // Product doesn't exist
      return [
        ...prevCart,
        {
          productUrl: productDetails,
          productQuantity: quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    addToCart((prevCart) => prevCart.filter((product) => product.productUrl.id !== productId));
  };

  return (
    <>
      {addCart ? (
        <div>
          <input className={styles.input} type="number" value={quantity} onChange={handleChange} />
        </div>
      ) : (
        <button
          className={styles.addCartButton}
          type="button"
          onClick={() => {
            setAddCart(true);
            addProduct(productDetails, quantity);
          }}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
