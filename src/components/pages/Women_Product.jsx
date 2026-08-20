import { useOutletContext } from 'react-router';
import ProductInfo from '../layout/Product_info';

export default function Women_Product() {
  const { data, addToCart } = useOutletContext();
  const women_product = data.filter((products) => products.category === "women's clothing");

  return (
    <>
      {women_product.map((product) => (
        <ProductInfo key={product.id} productDetails={product} addToCart={addToCart} />
      ))}
    </>
  );
}
