import { useOutletContext } from 'react-router';
import ProductInfo from '../layout/Product_info';

export default function Men_Product() {
  const data = useOutletContext();
  const mens_product = data.filter((products) => products.category === "men's clothing");
  return (
    <>
      {mens_product.map((product) => (
        <ProductInfo key={product.id} productDetails={product} />
      ))}
    </>
  );
}
