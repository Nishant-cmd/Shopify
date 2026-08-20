import { useOutletContext } from 'react-router';
import ProductInfo from '../layout/Product_info';

const Products = () => {
  const { data, addToCart } = useOutletContext();
  return (
    <>
      {data.map((product) => (
        <ProductInfo key={product.id} productDetails={product} addToCart={addToCart} />
      ))}
    </>
  );
};
export default Products;
