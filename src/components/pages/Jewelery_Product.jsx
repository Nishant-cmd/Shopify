import { useOutletContext } from 'react-router';
import ProductInfo from '../layout/Product_info';

export default function Jewelery_Product() {
  const { data, addToCart } = useOutletContext();
  const jewelery = data.filter((products) => products.category === 'jewelery');

  return (
    <>
      {jewelery.map((product) => (
        <ProductInfo key={product.id} productDetails={product} addToCart={addToCart} />
      ))}
    </>
  );
}
