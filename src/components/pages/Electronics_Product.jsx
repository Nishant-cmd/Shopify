import { useOutletContext } from 'react-router';
import ProductInfo from '../layout/Product_info';

export default function Electronics_Product() {
  const { data, addToCart } = useOutletContext();
  const electronics = data.filter((products) => products.category === 'electronics');
  return (
    <>
      {electronics.map((product) => (
        <ProductInfo key={product.id} productDetails={product} addToCart={addToCart} />
      ))}
    </>
  );
}
