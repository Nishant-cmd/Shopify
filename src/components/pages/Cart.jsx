import { useState } from 'react';
import styles from '../../styles/product_info.module.css';

const useCart = () => {
  const [productsInCart, addInCart] = useState(null);
  console.log(productsInCart);

  return { productsInCart, addInCart };
};

function CartInfo() {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productDetails.image} alt="ProudctImg" />
      </div>
      <div className={styles.product_info}>
        <p className={styles.details}>{productDetails.title}</p>
        <p className={styles.category}>{productDetails.category}</p>
        <div className={styles.inputDiv}>
          {/* <span>{'$' + productDetails.price}</span> */}
          <Input setAddCart={setAddCart} productDetails={productDetails} />
        </div>
      </div>
    </div>
  );
}

function Input({ productCount, addCart, setAddCart, productDetails }) {
  const [quantity, setQuantity] = useState(productCount);
  const { addInCart } = useCart();

  const handleChange = (event) => {
    if (event.target.value > 0) {
      setQuantity(event.target.value);
    } else {
      setAddCart(false);
    }
  };

  const iterateProduct = (productDetails, quantity) => {
    const productIndex = cartProducts.findIndex(
      (product) => product.productUrl.id === productDetails.id,
    );

    if (productIndex !== -1) {
      cartProducts[productIndex].productQuantity = quantity;
      return;
    }

    const productInfo = {
      productUrl: productDetails,
      productQuantity: quantity,
    };
    cartProducts.push(productInfo);
  };

  const onClick = () => {
    iterateProduct(productDetails, quantity);
    productCount = quantity;
    addInCart(cartProducts);
    setAddCart(false);
  };

  return (
    <>
      {addCart ? (
        <div>
          <button className={styles.addCartButton} type="button" onClick={onClick}>
            Save items
          </button>
          <input className={styles.input} type="number" value={quantity} onChange={handleChange} />
        </div>
      ) : (
        <button className={styles.addCartButton} type="button" onClick={() => setAddCart(true)}>
          Add to Cart
        </button>
      )}
    </>
  );
}

export default function CartProducts() {
  const { productsInCart } = useCart();

  return <div></div>;
}

export { useCart };
