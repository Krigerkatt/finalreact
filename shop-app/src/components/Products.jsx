import Product from './Product';

const Products = ({ products }) => {
  if (products.length === 0) {
    return <p className="no-products">Товары не найдены</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
